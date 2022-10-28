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
    coustemerRatimg:{
        type:Number,
        default :1.5
    },
    offerPrize:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        default:"Amp up your casual wardrobe with this tribal printed casual shirt that has a mandarin collar, long sleeves with button cuffs, a button placket, and a patch pocket."
    },
    deliveryCharge:{
        type:String,
        default:"Free Delivery"
    },
    productSubCategorie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCategorie",
        required:true
    },
    quantity:{type:Number,default:1},
    images:{
        img1:{type:String},
        img2:{type:String},
        img3:{type:String},
    }

})

module.exports = mongoose.model("product",productSchema)