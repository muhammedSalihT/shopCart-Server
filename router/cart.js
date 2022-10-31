const express = require("express");
const cartRouter = express.Router();
const cartModel = require("../models/cart");

cartRouter.post("/api/addtocart",async(req,res)=>{
    try{
        console.log("called");
const {products:{productId},user_Id} = req.body;
const exsistingCart  = await cartModel.findOne({productId:req.params.productId});
if(exsistingCart){
    return res.status(400).json({msg:"This Product is already exsist"});
}else{
    cart.save();
    console.log(cart);
    res.status(200).json({product,msg:"Added Succefully"})
}
    }catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
})
module.exports = cartRouter;
