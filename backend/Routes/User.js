const express = require("express");
const UserRouter = express.Router();
const { UserModel } = require("../models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const e = require("express");


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
  let { mobile, name, username, password } = req.body;
  try {
    bcrypt.hash(password, 8, async (err, protected_password) => {
      if (err) {
        console.log(err);
      } else {
        let newUser = new UserModel({
          mobile,
          name,
          username,
          password: protected_password,
        });
        await newUser.save();
        res.send("User has been created");
      }
    });
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
          const token = jwt.sign({project:"mywork"},"phoenix");
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
