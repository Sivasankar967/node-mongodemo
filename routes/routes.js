const express =require('express');
const router =express.Router();
const Data =require('../models/model.js')
const mongoose =require('mongoose')

// router.use(express.json())
router.post('/post',async(req,res)=>{
    console.log("res", req);
    const data= new Data({
        name:req.body.name,
        age: req.body.age
    })
    console.log('data',data)
    try{
        const dataTosave = await data.save()
        res.status(200).json(dataTosave)
    }catch (error)
    {
     res.status(400).json({message:error.message})
    }
  
});





module.exports=router;


