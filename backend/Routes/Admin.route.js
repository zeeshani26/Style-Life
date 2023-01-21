const express = require('express');
const { RestaurantModel } = require('../models/Restaurants.model');
const jwt = require("jsonwebtoken");
const { UserModel } = require('../models/Users.model');
const { SpaModel } = require('../models/spa.model');
const { HealthModel } = require('../models/health.model');
const AdminRouter = express.Router();
AdminRouter.use(express.json());

// for restaurants

AdminRouter.get("/restro",async(req,res)=>{
 try {
    let data = await RestaurantModel.find();
    res.status(200).send(data);
 } catch (error) {
    res.send(error.message);
 }
});

AdminRouter.post("/restro/post/",async(req,res)=>{
const payload = req.body;   
   try {
      let data = new RestaurantModel(payload);
      await data.save();
      let alldata= await RestaurantModel.find();
      res.status(200).send({alldata,data});

   } catch (error) {
      console.log(error);
      res.status(404).send(error.message)
   }
})

AdminRouter.patch("/restro/update/:id",async(req,res)=>{
   const id = req.params.id;
   const payload = req.body
   try {
      await RestaurantModel.findByIdAndUpdate({_id:id},payload);
      let alldata = await RestaurantModel.find();
      res.status(200).send({alldata,",msg":"data has been updated"});

   } catch (error) {
      console.log(error);
      res.status(404).send(error.message)
   }
})

AdminRouter.delete("/restro/delete/:id",async(req,res)=>{
   const id = req.params.id;
   
   try {
      await RestaurantModel.findByIdAndDelete({_id:id});
      let alldata = await RestaurantModel.find();
      res.status(200).send(alldata);

   } catch (error) {
      console.log(error);
      res.status(404).send(error.message)
   }
})


// for spa
AdminRouter.get("/spa",async(req,res)=>{
   try {
      let data = await SpaModel.find();
      res.status(200).send(data);
   } catch (error) {
      res.send(error.message);
   }
  });
  
  AdminRouter.post("/spa/post/",async(req,res)=>{
  const payload = req.body;   
     try {
        let data = new SpaModel(payload);
        await data.save();  
       let alldata= await SpaModel.find();
        res.status(200).send({alldata,data});
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  })
  
  AdminRouter.patch("/spa/update/:id",async(req,res)=>{
     const id = req.params.id;
     const payload = req.body
     try {
        await SpaModel.findByIdAndUpdate({_id:id},payload);
        let alldata = await SpaModel.find();
        res.status(200).send({alldata,",msg":"data has been updated"});
  
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  })
  
  AdminRouter.delete("/spa/delete/:id",async(req,res)=>{
     const id = req.params.id;
     
     try {
        await SpaModel.findByIdAndDelete({_id:id});
        let alldata = await SpaModel.find();
        res.status(200).send(alldata);
  
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  })
// for health  
AdminRouter.get("/health",async(req,res)=>{
   try {
      let data = await HealthModel.find();
      res.status(200).send(data);
   } catch (error) {
      res.send(error.message);
   }
  });
  
  AdminRouter.post("/health/post/",async(req,res)=>{
  const payload = req.body;   
     try {
        let data = new HealthModel(payload);
        await data.save();
        let alldata= await HealthModel.find();
        res.status(200).send({alldata,data});
  
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  })
  
  AdminRouter.patch("/health/update/:id",async(req,res)=>{
     const id = req.params.id;
     const payload = req.body
     try {
        await HealthModel.findByIdAndUpdate({_id:id},payload);
        let alldata = await HealthModel.find();
        res.status(200).send({alldata,",msg":"data has been updated"});
  
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  })
  
  AdminRouter.delete("/health/delete/:id",async(req,res)=>{
     const id = req.params.id;
     
     try {
        await HealthModel.findByIdAndDelete({_id:id});
        let alldata = await HealthModel.find();
        res.status(200).send({alldata,",msg":"data has been deleted"});
  
  
     } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
     }
  });

  // for user's

  AdminRouter.get("/users",async(req,res)=>{
   try {
      let data =await UserModel.find();
      res.status(200).send(data)
   } catch (error) {
      console.log(error);
      res.status(404).send(error.message)
   }
  })

  AdminRouter.patch("/users/type/:id",async(req,res)=>{
   const id = req.params.id;
   try {
      let data =await UserModel.find({_id:id});
      if(data.length>0){
         if(data[0].type==='user'){
            await UserModel.findByIdAndUpdate({_id:id},{type:"admin"});
            let data = await UserModel.find();
            res.status(200).send({data,'msg':"user type has been changed"})
         }
         else{
            await UserModel.findByIdAndUpdate({_id:id},{type:"user"});
            res.status(200).send("admin changed to user")
         }
      }
      else{
         res.status(401).send("user not found")
      }
   } catch (error) {
      console.log(error);
      res.status(404).send(error.message)
   }
  })
  

module.exports = {AdminRouter};