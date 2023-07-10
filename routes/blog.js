const express=require("express");
const router=express.Router();
const path=require("path");

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/projects.html'));
})

module.exports=router;