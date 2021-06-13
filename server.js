
const express=require('express')
const session = require('express-session')

const app=express()
const expressSession=require('express-session')
const {db ,users}=require('./modules/db')
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:'dsmfksmffndsajfndsfcbnxzcbmsdmnfbhds',
    name:'cookie1'
}))

app.use('/signup',express.static(__dirname+'/public/src/signup.html'))
    
app.post('/signup',async (req,res)=>{
     if(!req.body.username || !req.body.name || !req.body.password)
          res.status(404).redirect('/signup')
       else{   
     const user=  await users.create({
         name:req.body.name,
         username:req.body.username,
         password:req.body.password
     })
     res.status('201').send(`user created with ${user.id}`);
    }
})

app.use('/login',express.static(__dirname+'/public/src/login.html'))


app.post('/login',async (req,res)=>{
              
    const user=await users.findOne({where:{username:req.body.username,password:req.body.password}})
    if(!user) 
      {
        res.status('404').redirect('/login')
      }
    // if(findOne===req.body.password)
    //    {
    //        res.status('401').send("Invalid Password")
    //    }
    res.redirect('/')
})

app.use('/',express.static(__dirname+'/public'))
// app.get('/',(req,res)=>{
//     res.render('index')
// })

db.sync()
.then(()=>{
app.listen('4444',()=>{
    console.log("Server started on http://localhost:4444")
})})
.catch((err)=>{
    console.error("NOT Started" + err)
})