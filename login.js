const express=require('express')
const app=express()
app.get('/login',function(req,res) {
    res.send("login homepage")
})
app.get('/register',function(req,res) {
    res.send("register homepage")
})
app.listen (8088)
