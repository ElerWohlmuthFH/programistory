const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //import to encrypt passwords

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER, //standard user & password for XAMPP
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//(async&await) actions might take time so server waits for them to be done and then proceeds to next
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).send(JSON.stringify({
                loggedin: false,
                message: 'Please provide an email and password'
            }))

            /*
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })*/
        }
        //mysql query to select all cols from database
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results);
            //if no results and password from user not correct
            if (!results || results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
                /*
                res.status(401).render('login', {
                    message: 'Incorrect Email or Password'
                })
                */

                return res.status(400).send(JSON.stringify({
                    loggedin: false,
                    message: 'Incorrect Email or Password'
                }))


            } else {
                const id = results[0].id;
                //to start putting tokens in cookies
                const token = jwt.sign({id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);

                //session
                req.session.loggedin = true;
                req.session.sessionid = token;
                req.session.userid = id;
                req.session.name = results[0].name;
                req.session.email = email;

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 //convert to millis
                    ),
                    //only set cookies on http env
                    httpOnly: true
                }
                //sets up cookie in browser
                res.cookie('jwt', token, cookieOptions);

                res.status(200).send(JSON.stringify(req.session))
                //res.status(200).redirect("/");
            }
        })

    } catch (error) {
        console.log(error);
    }

}
exports.register = (req, res) => {
    console.log(req.body);


//destructuring in JavaScript
    const {name, email, password, passwordConfirm} = req.body;
    /*  = const name = req.body.name;
         const email = req.body.email;
         const password = req.body.password;
         const passwordConfirm = req.body.passwordConfirm;*/

    if (!name || !email || !password) {

        return res.render('register', {
            alertType: 'danger',
            message: 'Provide name, email and password!',
            name: name,
            email: email
        })
    }
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) { //email already exists
            return res.render('register', {
                alertType: 'danger',
                message: 'The email ' + email + ' is already in use',
                name: name,
                email: email
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                alertType: 'danger',
                message: 'Passwords do not match',
                name: name,
                email: email
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);//8 rounds of encryption
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    alertType: 'success',
                    message: 'User ' + name + ' (' + email + ') registered'
                });
            }
        })
    })


}

exports.delete = async (req, res) => {
    try {
        const {userid} = req.body;

        if (!userid) {
            return res.status(400).render('index', {
                message: 'Please provide an userid!'
            })
        }

        db.query('DELETE FROM users WHERE id = ?', [userid], async (error, results) => {
            console.log(results);
            if (error) {
                res.status(401).render('index', {
                    message: 'Incorrect userid!'
                })
            } else {
                console.log(results);
                //session

                const name = req.session.name.toString();
                const email = req.session.email.toString();

                req.session.destroy();

                return res.status(200).render("index", {
                    userDeleted: true,
                    name: name,
                    email: email
                });
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.update = async (req, res) => {
    try {
        console.log("sql update");

        const {userid, newpwd} = req.body;

        console.log(userid,newpwd);

        if (!userid || !newpwd) {
            return res.status(400).render('index', {
                message: 'Please provide an userid!'
            })
        }

        let hashedPassword = await bcrypt.hash(newpwd, 8);//8 rounds of encryption
        console.log(hashedPassword);

        db.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userid], (error, results) => {

            console.log(results);
            if (error) {
                res.status(401).render('index', {
                    message: 'Update not successful!'
                })
                console.log(error);
            } else {
                console.log(results);
                //session

                const name = req.session.name.toString();
                const email = req.session.email.toString();

                req.session.destroy();

                return res.status(200).render("index", {
                    passwordUpdated: true,
                    name: name,
                    email: email
                });
            }
        })

    } catch (error) {
        console.log(error);
    }


}
