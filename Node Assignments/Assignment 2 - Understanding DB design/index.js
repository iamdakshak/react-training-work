const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'practice' /* Comment out during dB creation*/
});

//Connect to MySQL
db.connect(err => {
    if(err) throw err;
    console.log('Connection establised!');
});

//Setting up Express Server
const app = express();

//Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE practice';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database Created!');
    })
});

//Create Table 
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), age INT, city VARCHAR(255), designation CHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('<h1>Table created!</h1>')
    })
})

//Add a new column
app.get('/addcolumn', (req, res) => {

    let sql = 'ALTER TABLE employee ADD COLUMN contact_no INT';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('<h1>Column added!</h1>')
    })
})


//Port declaration for Server 
app.listen(3000, () => console.log('Server running at port 3000'));


