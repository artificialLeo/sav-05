const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require('nodemailer');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(4000, () => {
    console.log("Server is running on port 4000.");
});


const pool = mysql.createPool({
    connectionLimit: 5,
    host: "remotemysql.com",
    user: "7dh90283k0",
    database: "7dh90283k0",
    password: "tzDgaLk4OI"
});