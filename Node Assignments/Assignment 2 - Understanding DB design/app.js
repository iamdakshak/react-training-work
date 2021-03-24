const express = require('express')
const mysql = require('mysql')

//Create MySQL Connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql' /*When you haven't already created this DB comment out this line to create db first and after you can uncomment it when we've created db*/
})

//Connect to mySQL
db.connect((err) => {
    if(err) throw err
    console.log('MySQL Connected!')
})

//Setting up Express Server
const app = express()

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Database created successfully!')
    })
})

//Create Table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Posts table created!')
    })
})

//Insert POst 1
app.get('/addpost1', (req, res) => {
    let post = {title: 'Post One', body: 'This is my first post'}
    let sql = 'INSERT INTO posts SET ?' /* ? here is a placeholder which we're gonna pass later for 'post' veriable */
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Post 1 added!')
    })
})
//Insert Post 2
app.get('/addpost2', (req, res) => {
    let post = {title: 'Post Two', body: 'This is my second post.'}
    let sql = 'INSERT INTO posts SET ?' /* ? here is a placeholder which we're gonna pass later for 'post' veriable */
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Post 2 added!')
    })
})

//Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts' 
    let query = db.query(sql, (err, results) => {
        if(err) throw err
        console.log(results)
        res.send('Posts fetched!')
    })
})

//Select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}` 
    let query = db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Post fetched!')
    })
})

//Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title'
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}` 
    let query = db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Post updated!')
    })
})

//Delete post
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}` 
    let query = db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Post deleted!')
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

