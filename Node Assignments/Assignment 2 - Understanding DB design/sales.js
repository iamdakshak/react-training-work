const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sales' /* Comment out during dB creation*/
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
    let sql = 'CREATE DATABASE sales';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database Created!');
    })
});

//Create Table 
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE salesmen(salesman_id INT PRIMARY KEY, name CHAR(255), city CHAR(255), commission DECIMAL(4,2))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('<h1>Table created!</h1>')
    })
})

//Insert Values
app.get('/insertval', (req, res) => {
    let sql = `INSERT INTO salesmen (salesman_id, name, city, commission) VALUES (5001, 'James Hoog', 'New York', 0.15)`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('<h1>Value inserted!</h1>')
    })
})

//4. Count the number of distinct cities present in the table. 
app.get('/distinct', (req, res) => {
    let sql = `SELECT DISTINCT city FROM salesmen`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`<h1>Distinct Cities found!</h1>`)
    })
})

//5. Find all `salesman_id`s whose commission is greater than 0.11 
app.get('/greater', (req, res) => {
    let sql = `SELECT salesman_id FROM salesmen WHERE commission > 0.11`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`<h1>Salesman IDs having commission greater than 0.11 found!</h1>`)
    })
})

//6. Find the total commissions of all salesmen.
app.get('/total', (req, res) => {
    let sql = `SELECT SUM(commission) totalCommission FROM salesmen`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`<h1>Total commission found!</h1>`)
    })
})


//7. Find the name of the salesman having the second highest commission.
app.get('/name', (req, res) => {
    let sql = `SELECT name, MAX(commission) AS commission FROM salesmen WHERE commission < (SELECT MAX(commission) FROM salesmen)`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`<h1>Name of Salesman with 2nd highest commission found!</h1>`)
    })
})

//Port declaration for Server 
app.listen(4000, () => console.log('Server running at port 4000'));