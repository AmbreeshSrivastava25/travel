const express=require("express");
const router=express.Router();
const path=require("path");

router.get('/',(req,res)=>{
    res.render('home')
    // res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.get('/projects',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/projects.html'));
    res.render('projects')
})

module.exports=router;