const express = require("express");
const passEnCrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/signup_model");
require("dotenv").config()
const authRouter = express.Router();


authRouter.post("/api/signup",async function(req,res){

    try{
        const {name,email,password} = req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({status:false,msg:"This user is already exsist"});
            
        }
        console.log(password);
        const hashPassword = await passEnCrypt.hash(password,8);

        const user = new User({email,password:hashPassword,name,});
    
        resUser = await user.save();
        const token = jwt.sign({id:user._id},"passwordKey");
        // res.json({token,...user._doc});
        res.status(200).json({"status":true, token,resUser,msg:"SignUp Successfull"});
    } catch (e){
        res.status(500).send("Credentials Are Required");
        
    }
  
})

authRouter.post("/api/signIn",async function(req,res){
    try {
        const{email,password}= req.body;
        const user =await User.findOne({email});
        if(!user){
            console.log("no user");
           return res.status(400).json({status:false,msg:"User with this email does not exist!"});
        }
        console.log(user)
        const isMatch =await passEnCrypt.compare(password,user.password)
        if(!isMatch){
           return res.status(400).json({status:false,msg:"Incorrect password"});
        }
        return res.status(200).json({status:true,msg:"LogIn Succesfully"})
    } catch (error) {
        res.status(500).json({status:false,msg:"Credentials are required"});
        console.log(error.message);
    }
});

module.exports = authRouter;
