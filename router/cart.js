const express = require("express");
const cartRouter = express.Router();
const cartModel = require("../models/cart");
const productModel = require("../models/productmodel");

cartRouter.post("/api/addtocart",async(req,res)=>{
    try{
        console.log(req.body);
const {cartitem_Id,user_Id} = req.body;
const exsistingCart  = await cartModel.findOne({cartitem_Id});
if(exsistingCart){
    return res.status(400).json({status:false,msg:"This Product is already exsist"});
}else{
  const savedCart = await cartModel({cartitem_Id,user_Id}).save();
    res.status(200).json({savedCart,status:true,msg:"Added Succefully"})
}
    }catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
})

//----get all cart by user---------

cartRouter.get("/api/getallcart/",async (req,res)=>{
    try{
        const allCart = await cartModel.find({user_Id:req.query.user_Id}).populate("cartitem_Id");
        res.status(200).json({allCart,"status":true,massege:"cart fetched succefully"})
    }catch(e){
        res.status(500).json({"status":false,message:e.message})
    }
})

module.exports = cartRouter;



