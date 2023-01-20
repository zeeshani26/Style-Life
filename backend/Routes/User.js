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
    if(user.length>0){
      bcrypt.compare(password,user[0].password,(err,result)=>{
        if(result){
          const token = jwt.sign({project:"mywork"},process.env.key);
          res.send({"msg":"login successful","token":token});

        }
        else{
          res.send("Wrong Credentials")
        }
      })
    }
    else{
      res.send("Please fill correct email id")
    }
  } catch (error) {
    res.send(error)
  }
})

module.exports = {UserRouter}
//userid=63c8d350abd2bb9fc104a8f5
//