const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email id");
            }
        }
    },
    password:{
        type:Number,
        require:true,
        min:10
    }
})

const user = mongoose.model("User", userSchema);
module.exports = user;