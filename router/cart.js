const express = require("express");
const cartRouter = express.Router();
const cartModel = require("../models/cart");

cartRouter.post("/api/addtocart/:userId/:productId",async(req,res)=>{
    try{
const cart = cartModel({
    products:[{
        productId:req.params.productId
    }],
    user_Id:req.params.userId
});
const exsistingCart  = await cartModel.findOne({productId:req.params.productId});
if(exsistingCart){
    return res.status(400).json({msg:"This Product is already exsist"});
}else{
    cart.save();
    res.status(200).json({product,msg:"Added Succefully"})
}
    }catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
})
module.exports = cartRouter;
