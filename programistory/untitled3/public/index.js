//DELETE user

function deleteUser() {
    let userid = document.getElementById("userid").value;
    console.log("halloooo");
    console.log(userid);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === this.DONE) {
            if (this.status === 200) {
                document.write(this.responseText)
            } else if (this.status == 400) {
                let response = JSON.parse(this.responseText)
                alert(response.message)
                document.getElementById("submit").disabled = false;
            }
        }
    };
    request.withCredentials = true;
    request.open("DELETE", "/auth/delete", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send("userid=" + userid);

    document.getElementById("submit").disabled = true;
}
/*
function changeUser() {
    let userid = document.getElementById("userid").value;
    console.log("halloooo");
    console.log(userid);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === this.DONE) {
            if (this.status === 200) {
                document.write(this.responseText)
            } else if (this.status == 400) {
                let response = JSON.parse(this.responseText)
                alert(response.message)
                document.getElementById("submit").disabled = false;
            }
        }
    };
    request.withCredentials = true;
    request.open("DELETE", "/auth/delete", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send("userid=" + userid);

    document.getElementById("submit").disabled = true;
}

 */


function update() {
    let userid = document.getElementById("userid").value;
    let newpwd = document.getElementById("newpwd").value;

    console.log("newpwd: " + newpwd);
    console.log("userid: " + userid);


    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === this.DONE) {
            if (this.status === 200) {
                document.write(this.responseText)
            } else if (this.status == 400) {
                let response = JSON.parse(this.responseText)
                alert(response.message)
                document.getElementById("submit").disabled = false;
            }
        }
    };

    const token = sessionStorage.getItem('token'); //Add this line

    request.withCredentials = true;
    request.open("PUT", "/auth/update", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.setRequestHeader('Authorization', `Bearer ${token}`);
    request.send(JSON.stringify({"userid": userid, "newpwd":newpwd}));

    console.log("bearer: " + `Bearer ${token}`);

    document.getElementById("submit").disabled = true;
}



// //UPDATE USER DATA
// router.put('/user/:id', async(req,res) => {
//     //Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//
//     const item = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         password: hashedPassword}
//
//     try{
//         await User.updateOne({"_id": objectID(req.params.id)},
//             {$set: item});
//
//         res.send('User data successfully updated!');
//     }
//     catch(err){
//         res.status(400).send(err);
//     }
// })
