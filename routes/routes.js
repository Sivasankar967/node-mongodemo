const express =require('express');
const router =express.Router();
const Data =require('../models/model.js');
const mongoose =require('mongoose');

router.use(express.json());
router.post('/post',async(req,res)=>{

    const data= new Data({
        name:req.body.name,
        age: req.body.age
    });
    try{
        const dataTosave = await data.save();
        res.status(200).json(dataTosave);
    }catch (error)
    {
     res.status(400).json({message:error.message});
    }
  
    router.get('/getAll', async(req,res)=>{
        try{
            const data = await Data.find()
            res.json(data);
            console.log('data',data);
        }
        catch (error){
            res.status(500).json({message:error.message});
        }
    })

    router.get('/getOne/:id', async (req, res) => {
        try{
            const data = await Data.findById(req.params.id);
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })

    router.patch('/Update/:id',async(req,res)=>{
     try{
        const id = req.params.id
        const data =req.body
        const options= {new :true}

        const result = await Data.findByIdAndUpdate(
            id,data,options
        )
        res.send(result)
     }catch(error){
        res.status(500).json({message:error.message})
     }
    })

    router.delete('/delete/:id',async (req,res)=>{
       try{
        const id=req.params.id
        const data= await Data.findByIdAndDelete(id)
        res.send(`${data.name} deleted succesfully`)   
       }
       catch(error){
        res.status(500).json({message:error.message})
       }
    })
});





module.exports=router;


