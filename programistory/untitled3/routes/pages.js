const express = require('express'); //import express
const router = express.Router();

router.get('/', (req, res) => {

    if (req.session.loggedin === true) {
        res.render('index', {
            loggedin: true,
            userid: req.session.userid,
            name: req.session.name,
            email: req.session.email
        });
        return;
    }

    res.render('index');
});

router.get('/register', (req, res) => {

    if (req.session.loggedin === true) {
        res.redirect("/main");
        return;
    }

    res.render('register');
});

router.get('/login', (req, res) => {

    if (req.session.loggedin === true) {
        res.redirect("/main");
        return;
    }

    res.render('login');
});


router.get('/logout', (req, res) => {

    if (req.session.loggedin === true) {
        req.session.destroy()
    }
    res.redirect("/");
});

//method to get weather
router.get('/weather', (req, res) => {

    if (req.session.loggedin === true) {
        res.redirect("/weather");
        return;
    }

    res.render('weather');
});


module.exports = router;