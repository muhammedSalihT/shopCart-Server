const express = require("express");
const cartRouter = express.Router();
const cartModel = require("../models/cart");

cartRouter.post("/api/addtocart",async(req,res)=>{
    try{
        console.log(req.body);
const {products:{productId},user_Id} = req.body;
const exsistingCart  = await cartModel.findOne({productId});
if(exsistingCart){
    return res.status(400).json({msg:"This Product is already exsist"});
}else{
   const savedCart =await cartModel({productId}).save();
    res.status(200).json({product,msg:"Added Succefully"})
}
    }catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
})
module.exports = cartRouter;
