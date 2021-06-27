const express = require("express");
const path = require('path');
const mysql = require("mysql")
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config({path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER, //standard user & password for XAMPP
    password: process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public'); //dirname gives access to the current directory
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

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.get('/main', function(req, res) {

    //you must be logged in
    if(req.session.loggedin) {
        res.sendFile(path.join(__dirname + '/public/main.html'));
        return;
    }
    res.redirect("/");

});



/*
app.get('/', (req, res) => {

        if((typeof req.session !== "undefined") && req.session.loggedin == true) {
            res.redirect("/main");
        }

    res.end()
});*/

const port = 6500;
app.listen(port, () => {
    console.log("Server started on Port " + port);
})