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
    let sort= req.query.sort;
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let popular = req.query.popular;
    try {
        if(city && sort && popular){
            let data = await SpaModel.find({ address : { $regex:city, $options: 'i' } }).sort({name:sort,rating:1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(city && popular){
            let data = await SpaModel.find({ address : { $regex:city, $options: 'i' } }).sort({rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort && popular){
            let data = await SpaModel.find().sort({name:sort,rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(popular){
            let data = await SpaModel.find().sort({ rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort){
            let data = await SpaModel.find().sort({ name:sort}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }else if(city){
            let data = await SpaModel.find({ address : { $regex:city, $options: 'i' } }).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else{
            let data = await SpaModel.find().skip(limit*(page-1)).limit(limit);
            res.send(data);
        }   
    }  catch (error) {
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