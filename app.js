const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({path: './.env'});
const app = express();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, './programistory');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected...")
    }
})

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/programistory/login.html'));
});

app.get("/", (req, res)=> {
   // res.send ("<h1>Home page</h1>")
    res.render("main.html")
})

app.listen (5000, () => {
    console.log("Hello World");
})