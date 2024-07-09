const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'aits_rajampet'
})
db.connect(function(error) {
    if(error) {
        console.log("connection unsec");
        return;
    }
    else {
        console.log("connection successfull");
    }
})
app.get('/get_users',function(req,res) {
    db.query('SELECT*FROM employees',function(err,results) {
        res.json(result);
    })
})
app.listen(8088)