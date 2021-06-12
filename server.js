
const express=require('express')

const app=express()
const expressSession=require('express-session')
app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:'dsmfksmffndsajfndsfcbnxzcbmsdmnfbhds',
    name:'cookie1'
}))


app.use('/',express.static(__dirname+'/public'))
// app.get('/',(req,res)=>{
//     res.render('index')
// })

app.listen('4444',()=>{
    console.log("Server started on http://localhost:4444")
})