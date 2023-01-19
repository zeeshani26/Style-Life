const express = require('express');
const SpaRouter = express.Router();
const {SpaModel} = require("../models/spa.model");       

//for getting all the restaurants
SpaRouter.get("/",async(req,res)=>{
    try {
        let spa = await SpaModel.find();
        res.status(200).send(spa);
    } catch (error) {
        console.log(error);
    }
})
//filter for restaurants

SpaRouter.get("/filter",async(req,res)=>{
    let city = req.query.city;
    console.log(city);
    try {
        if(city){
            let data = await SpaModel.find({ address: { $regex:city, $options: 'i' } });
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    res.send(error.message);
    }

});


//single spa 

SpaRouter.get("/:id",async(req,res)=>{
    const _id = req.query.id;
    try {
        let singleSpa = await SpaModel.findOne(_id);
        res.status(200).send(singleSpa)
    } catch (error) {
        console.log(error.message)
        res.send(error.message);
    }
})

module.exports= {SpaRouter};