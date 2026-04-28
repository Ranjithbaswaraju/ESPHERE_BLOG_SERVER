const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{type:String,minlength:6,required:true},
    email:{type:String,required:true},
    password:{type:String,minlength:6,required:true},
    role:{
        type:String,
        enum:["admin","author"],
        default:"author"

    }
},{timestamps:true})

const UserModel=mongoose.model('user',UserSchema)
module.exports={UserModel}
