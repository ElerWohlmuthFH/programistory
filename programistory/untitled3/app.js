const express = require("express"); //import express to start our server from nodejs
const path = require('path'); //import path comes default with nodejs no need to install
const mysql = require("mysql") //import mySql
const dotenv = require('dotenv'); //import dotenv
const cookieParser = require('cookie-parser');
const session = require('express-session');

//tell extension dotenv where the file that has vars is
dotenv.config({path: './.env'});

const app = express(); //to make sure that we start a server with app

//start db with sensitive info from .env
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER, //standard user & password for XAMPP
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//files for frontend to use
//__dirname var from nodejs gives access to current dir
const publicDirectory = path.join(__dirname, './public'); //dirname gives access to the current directory
//to make sure our server is using this public dir
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//tells nodejs which view engine is used to show html
//folder name views default name that handlebars uses
app.set('view engine', 'hbs');

//to connect the database
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.get('/main', function (req, res) {

    //you must be logged in
    if (req.session.loggedin) {
        res.sendFile(path.join(__dirname + '/public/main.html'));
        return;
    }
    res.redirect("/");

});

/*
app.get('/', (req, res) => {   //req: to grab sth from form
 res: what you want to send in frontend
        if((typeof req.session !== "undefined") && req.session.loggedin == true) {
            res.redirect("/main");
        }

    res.end()
});*/

//tells express which port to listen to server
const port = 6500;
app.listen(port, () => {
    console.log("Server started on Port " + port);
})