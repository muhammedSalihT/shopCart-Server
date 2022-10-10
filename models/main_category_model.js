const mongoose = require("mongoose");

const mainCateogerySchema = new mongoose.Schema({
    mainProduct:{
        type:String,
        required:true
    }
});


const MainCategory = mongoose.model("MainCategory",mainCateogerySchema);
module.exports = MainCategory;
