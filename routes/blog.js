const express=require("express");
const router=express.Router();
const path=require("path");

router.get('/',(req,res)=>{
    //res.render('home')
    res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.get('/home',(req,res)=>{
    res.render('home')
    // res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.get('/projects',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/projects.html'));
    res.render('projects')
})

router.get('/about',(req,res)=>{
    res.render('about')
})

module.exports=router;