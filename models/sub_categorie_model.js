const mongoose  = require("mongoose");

const subCategorieSchema = new mongoose.Schema({
    categoryName:{
        type:mongoose.Schema.Types.String,
        ref:"MainCategory",
    },
    subCategorieName:{type:String,required:true},
    // subCategorieImage:{type:String,required:true},
    subImage:{
        data:String,contentType:String,},
});

module.exports = mongoose.model("subCategorie",subCategorieSchema);