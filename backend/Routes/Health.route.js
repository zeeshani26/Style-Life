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
    let sort= req.query.sort;
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let popular = req.query.popular;
    try {
        if(city && sort && popular){
            let data = await HealthModel.find({ address : { $regex:city, $options: 'i' } }).sort({name:sort,rating:1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(city && popular){
            let data = await HealthModel.find({ address : { $regex:city, $options: 'i' } }).sort({rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort && popular){
            let data = await HealthModel.find().sort({name:sort,rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(popular){
            let data = await HealthModel.find().sort({ rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort){
            let data = await HealthModel.find().sort({ name:sort}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }else if(city){
            let data = await HealthModel.find({ address : { $regex:city, $options: 'i' } }).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else{
            let data = await HealthModel.find().skip(limit*(page-1)).limit(limit);
            res.send(data);
        }   
    }  catch (error) {
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