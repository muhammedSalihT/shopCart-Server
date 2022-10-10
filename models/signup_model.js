const mongoose = require("mongoose");


const signUpSchema = new mongoose.Schema({
  name:{
        type:String,
        required :true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate: {
            validator: (value) => {
              const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
              return value.match(re);
            },
            message: "Please enter a valid email address",
          },
    },
    phone_number:{
        type:Number,
        validator:(value)=>{
          value  
        },
        default:0,

    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:"user"
    }
    
});

const User = mongoose.model("User",signUpSchema);

module.exports = User;



















