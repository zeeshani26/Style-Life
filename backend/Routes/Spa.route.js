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

})

module.exports= {SpaRouter};