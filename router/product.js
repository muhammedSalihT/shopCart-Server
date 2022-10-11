const express = require("express");
const productRouter = express.Router();
const productModel = require("../models/productmodel");


productRouter.post("/api/addProduct/:catId/:subCatId",async(req,res)=>{

    try{
        console.log("callde");
    const product = await productModel({
        categoryName:req.params.catId,
        productName:req.body.productName,
        productPrize:req.body.productPrize,
        productType:req.body.productType,
        images:{
            img1:req.body.img1,
            img2:req.body.img2,
            img3:req.body.img3
        }
    }
    );
    console.log(productPrize);
    // const {productName,productPrize,
    //        productType,quantity,
    //        offerPrize,images
    // } = req.body;
    const existingProduct = await productModel.findOne({productName});
    if(existingProduct){
        return res.status(400).json({msg:"This Product is already exsist"});
    }
    const savedSubCategory =product.save();
        res.status(200).json({savedSubCategory,msg:"Added"})
    } catch(e){
        console.log(e.message);
        res.status(500).json({error:e.message})
    }
   
})

//     get trending

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

//-----------get budget--------//

productRouter.get("/api/getbudget/:id",async(req,res)=>{

    try{
        const budget = await productModel.find({productType:"budget zone",categoryName:req.params.id})
        console.log(budget);
        res.status(200).json({
            budget,
            message:"geting trending succesfully"
        })
       

    }catch(error){
        console.log(error)
        res.status(400).json({
            error,
            message:"get trending unsuccesfull"
        })
    }
})
module.exports = productRouter;