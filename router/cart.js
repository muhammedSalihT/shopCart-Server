const express = require("express");
const cartRouter = express.Router();
const cartModel = require("../models/cart");

cartRouter.post("/api/addtocart/:userId/:productId",async(req,res)=>{
    try{
        console.log("called");
const cart = cartModel({
    products:[{
        productId:req.params.productId
    }],
    user_Id:req.params.userId
});
cart.save();
    console.log(cart);
    res.status(200).json({product,msg:"Added Succefully"})
    }catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
})
module.exports = cartRouter;
