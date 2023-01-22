const jwt = require("jsonwebtoken");    
require("dotenv").config();

const AdminVerification = (req,res,next) => {
    const token = req.headers.admin;
    console.log(token);
    if(token){
        const decodedToken = jwt.verify(token,process.env.ADMINKEY);
        if(decodedToken){
            req.body.adminId = decodedToken.adminId
            next()
        }
        else{
            res.send("Please Login!")
        }
    }
    else{
res.send("Please Login!")
    }
}

module.exports = {AdminVerification}
