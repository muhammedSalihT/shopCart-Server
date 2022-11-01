const mongoose  = require("mongoose");

const cartShcema = new mongoose.Schema({
   
   cartitem_Id:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    user_Id :{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

})

module.exports = mongoose.model("cart",cartShcema)