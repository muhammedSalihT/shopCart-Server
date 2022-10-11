const mongoose  = require("mongoose");


const productSchema = new mongoose.Schema({
    categoryName:{
        type:mongoose.Schema.Types.String,
        ref:"MainCategory",
        required:true
    },
    productName:{
        type:String,
        required:true,
    },
    productPrize:{
        type:Number,
        required:true,
    },
    productType:{
        type:String,
        default:"new"
    },
    offerPrize:{
        type:String,
        required:true,
    },
    productSubCategorie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCategorie",
        required:true
    },
    quantity:{type:Number,default:1},
    offerPrize:{type:Number,},
    images:{
        img1:{type:String},
        img2:{type:String},
        img3:{type:String},
    }

})

module.exports = mongoose.model("product",productSchema)