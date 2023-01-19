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
});


//filter for restaurants

HealthRouter.get("/filter",async(req,res)=>{
    let city = req.query.city;
    let star = req.query.rating;
    try {
        if(city ){
            let data = await HealthModel.find({ address: { $regex:city, $options: 'i' } });
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    res.send(error.message);
    }

});


//signle health store

HealthRouter.get("/:id",async(req,res)=>{
    const _id = req.query.id;
    try {
        let singleHealth = await HealthModel.findOne(_id);
        res.status(200).send(singleHealth)
    } catch (error) {
        console.log(error.message)
        res.send(error.message);
    }
})

module.exports= {HealthRouter};