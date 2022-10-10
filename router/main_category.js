const express = require("express");
const MainCategory = require("../models/main_category_model");
require("dotenv").config()
const mainCategory = express.Router();

mainCategory.post("/api/addMainCategorie",async function(req,res){
  
    try{
        const {mainProduct} = req.body;
        const existingProd = await MainCategory.findOne({mainProduct});
        if(existingProd){
            return res.status(400).json({msg:"This product is already exsist"});
        }
        const savedMainCategory = await MainCategory({mainProduct}).save();
        res.status(200).json({savedMainCategory,msg:"Added"})
    } catch(e){
        res.status(500).json({error:e.message})
    }
})
//--------------------GetFunction-------------//

mainCategory.get("/api/getAllMainCategories",async function(req,res){
    try{
        const getAllMainCategories = await MainCategory.find();
        console.log(getAllMainCategories);
        res.status(200).json({
            data:getAllMainCategories
        })
    
    }catch(err){
        res.status(500).json(err)
      }
})



module.exports = mainCategory;