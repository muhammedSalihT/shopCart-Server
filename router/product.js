const express = require("express");
const productRouter = express.Router();
const productModel = require("../models/productmodel");


productRouter.post("/api/addProduct/:catId/:subCatId",async(req,res)=>{

    try{
        console.log("callde");
    const product =  productModel({
        categoryName:req.params.catId,
        productSubCategorie:req.params.subCatId,
        productName:req.body.productName,
        productPrize:req.body.productPrize,
        productType:req.body.productType,
        offerPrize:req.body.offerPrize,
        coustemerRatimg:req.body.coustemerRatimg,
        productDescription:req.body.productDescription,
        deliveryCharge:req.body.deliveryCharge,
        images:{
            img1:req.body.images.img1,
            img2:req.body.images.img2,
            img3:req.body.images.img3
        }
    }
    );
    console.log(product);
    const existingProduct = await productModel.findOne({productName:req.body.productName});
    console.log(existingProduct);
    if(existingProduct){
        return res.status(400).json({msg:"This Product is already exsist"});
    }else{
        product.save();
        res.status(200).json({product,msg:"Added"})

    }
  
    } catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
    }
   
})
//........get allproduct by categorie........//

productRouter.get("/api/getAll/:id",async(req,res)=>{

    try{
        const singleProduct = await productModel.findOne({_id:req.params.id})
        console.log(allProd);
        res.status(200).json({
            singleProduct,
            message:"geting  prod succesfully"
        })
       

    }catch(error){
        console.log(error)
        res.status(400).json({
            error:error,
            message:"get prod unsuccesfull"
        })
    }
})


//    ------------------------------- get trending--------------------------

productRouter.get("/api/getTrending/:id",async(req,res)=>{

    try{
        const trending = await productModel.find({productType:"Trending",categoryName:req.params.id})
        console.log(trending);
        res.status(200).json({
            trending,
            message:"geting trending succesfully"
        })
       

    }catch(error){
        console.log(error)
        res.status(400).json({
            error,
            message:"get popular unsuccesfull"
        })
    }
})

//---------------------get budget-------------------------------//

productRouter.get("/api/getbudget/:id/:prize",async(req,res)=>{

    try{
        const budget = await productModel.find({productType:"Budget Zone",categoryName:req.params.id,offerPrize:{$lte:req.params.prize}})
        console.log(budget);
        res.status(200).json({
            budget,
            message:"geting  succesfully"
        })
       

    }catch(error){
        console.log(error)
        res.status(400).json({
            error,
            message:"get  unsuccesfull"
        })
    }
})
module.exports = productRouter;