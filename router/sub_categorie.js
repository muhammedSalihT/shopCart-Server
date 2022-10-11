// const express = require("express");
// const subCategorieRouter = express.Router();
// const SubCategorie = require("../models/sub_categorie_model");


// subCategorieRouter.post("/api/addSubCategorie/:id",async function(req,res){
  
//     try{
//         const {subCategorieName,subCategorieImage} = req.body;
//         const existingSubCategorie = await SubCategorie.findOne({subCategorieName,subCategorieImage});
//         if(existingSubCategorie){
//             return res.status(400).json({msg:"This Categorie is already exsist"});
//         }
//         const savedSubCategory = await SubCategorie({subCategorieName,subCategorieImage,categoryName:req.params.id}).save();
//         res.status(200).json({savedSubCategory,msg:"Added"})
//     } catch(e){
//         console.log(e.message);
//         res.status(500).json({error:e.message})
//     }
// })
// //--------------------GetFunction-------------//

// subCategorieRouter.get("/api/getAllSubCategories/:string" ,async function(req,res){
//     try{
//         const getSubCategories = await SubCategorie.findOne({categoryName:req.params.string});
//         console.log(getSubCategories);
//         res.status(200).json({
//             data:getAllSubCategories
//         })
    
//     }catch(err){
//         res.status(500).json(err)
//       }
// });

// module.exports = subCategorieRouter;

const express = require("express");
const subCategorieRouter = express.Router();
const SubCategorie = require("../models/sub_categorie_model");
const multer = require("multer");


const Storage = multer.diskStorage({destination:"uploads",filename:(req,file,callback)=>{
    callback(null,file.originalname);
}});

const upload = multer({storage:Storage}).single("testImage");




subCategorieRouter.post("/api/addSubCategorie/:string",async function(req,res){
    try{
        upload(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log(req.file.filename);
                const data = new SubCategorie({
                    categoryName:req.params.string,
                    subCategorieName:req.body.subCategorieName,
                    subImage:{
                        data:req.file.originalname,
                        contentType:"image/png"
                    }
                })
            //      const existingSubCategorie =  SubCategorie.findOne({subCategorieName});
            // if(existingSubCategorie){
            //     return res.status(400).json({status:false,msg:"This Categorie is already exsist"});
            // }
             data.save().then(()=>{
                res.status(200).json({status:true,data,msg:"Added"})
             })
            
            }
        })
        // const data = await SubCategorie({subCategorieName:req.body.subCategorieName,
        //     categoryName:req.params.string,
        //     subImage:{
        //     data:req.testImage.SubCategorie,
        //     contentType:"image/png"
        //    }})
        //     // const existingSubCategorie =  SubCategorie.findOne({subCategorieName});
        //     // if(existingSubCategorie){
        //     //     return res.status(400).json({msg:"This Categorie is already exsist"});
        //     // }
        //     const savedSubCategory =  data.save();
        //     res.status(200).json({savedSubCategory,msg:"Added"})
    } catch(e){
        console.log(e.message);
        res.status(500).json({error:e.message})
    }
})
//--------------------GetFunction-------------//

subCategorieRouter.get("/api/getAllSubCategories/:id" ,async function(req,res){
    try{
        const getAllSubCategories = await SubCategorie.find(req.params.id);
        console.log(getAllSubCategories);
        res.status(200).json({
            data:getAllSubCategories,
            msg:"Get all"
        })
    
    }catch(err){
        res.status(500).json({msg:err})
      }
});

module.exports = subCategorieRouter;

