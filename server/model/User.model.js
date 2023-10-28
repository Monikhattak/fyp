const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema= new Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})

exports.model= mongoose.model("User",userSchema)