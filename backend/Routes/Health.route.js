const express = require('express');
const HealthRouter = express.Router();
const {HealthModel} = require("../models/health.model");       

//for getting all the restaurants
HealthRouter.get("/",async(req,res)=>{
    try {
        let health = await HealthModel.find();
        res.status(200).send(health);
    } catch (error) {
        console.log(error);
    }
})
//filter for restaurants

HealthRouter.get("/filter",async(req,res)=>{
    let city = req.query.city;
    console.log(city);
    try {
        if(city){
            let data = await HealthModel.find({ name: { $regex:city, $options: 'i' } });
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    res.send(error.message);
    }

})

module.exports= {HealthRouter};