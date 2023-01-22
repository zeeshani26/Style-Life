const express = require("express");
require("dotenv").config();
const UserRouter = express.Router();
const { UserModel } = require("../models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


UserRouter.get("/all", async (req, res) => {
  try {
    let allusers = await UserModel.find();
    res.send(allusers);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

UserRouter.post("/register", async (req, res) => {
  let { email, name, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if(user){
      return res.status(400).send("User already exists");
    }
    else{
      let regexpression = "[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,3}$";
      let response = email.match(regexpression);
      if(response){
        bcrypt.hash(password, 8, async (err, protected_password) => {
          if (err) {
            console.log(err);
          } else {
            let newUser = new UserModel({
            email,
              name,
              password: protected_password,
            });
            await newUser.save();
            res.status(200).send("User has been created");
          }
        });
      }
      else{
        return res.status(400).send("Invalid email"); 
      }
      
    }
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

UserRouter.post("/login",async(req,res)=>{
  const {email,password} = req.body;
  try {
    const user = await UserModel.find({email});
    console.log(user)
    if(user.length>0){
      if(user[0].type==='user'){
        bcrypt.compare(password,user[0].password,(err,result)=>{
          if(result){
            const token = jwt.sign({email:email,id:user[0]._id},process.env.ADMINKEY);
            res.send({"msg":"login successful","token":token});
          }
          else{
            res.send("Wrong Credentials")
          }
        })
      }
      else{
        bcrypt.compare(password,user[0].password,(err,result)=>{
          if(result){
            const token = jwt.sign({email:email,adminId:user[0]._id},process.env.ADMINKEY);

            res.send({"msg":"Admin login successful","token":token});
  
          }
          else{
            res.send("Wrong Credentials")
          }
        })
      }
    }
    else{
      res.send("Please fill correct email id")
    }
  } catch (error) {
    res.send(error)
  }
})


//forgot password

UserRouter.get("/forgot",async(req,res)=>{
  const email = req.body.email;

  try {
    const data =await UserModel.find({email:email});
    if(data.length>0){
      res.status(200).send({"user":"true"});
    }else{
    res.send("user doesn't exist")
    }

  } catch (error) {
    console.log(error.message);
    res.send(error.message)
  }
});

UserRouter.patch("/setpass",async(req,res)=>{
  const email = req.body.email;
  const password= req.body.password
  try {
    
    const data = await UserModel.find({email});
    if(data.length>0){
      bcrypt.hash(password, 8, async (err, protected_password) => {
        if (err) {
          console.log(err);
        } else {
          await UserModel.updateOne({email },{password:protected_password});
          res.status(200).send("User password has been changed successfully");
        }
      });
    }
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
})

module.exports = {UserRouter};

