const bcrypt=require("bcrypt")
const { UserModel } = require("../Models/userModel")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()

const LoginUser=async(req,res)=>{
   try{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})

    if(!user){
       return  res.status(500).send("User not exists please Register first")
    }

    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
       return  res.status(500).json({message:'Invalid Credientials ! please enter the correct credientials'})
    }

    //generate token
    const token=jwt.sign({userId:user._id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"24h"}
    )

    res.status(201).json({
        message:"Login successfully",
        token,
        user:{
            id:user._id,
            email:user.email,
            role:user.role
        }
    })

   }
   catch(err){
    console.log(err)
        res.status(500).send("Unable to login user !! please try again")
    }

    
}

const LogoutUser=(req,res)=>{
    try{
        res.status(200).json({message:"Logout Successfully !!"})
    }
    catch(err){
        res.status(500).json({message:"Unable to Logout please try again later!!"})
    }
}
const GetAllUsers=async(req,res)=>{
    try{
        const allUsers=await UserModel.find()
        res.status(200).json({message:"The all User below",data:allUsers})
    }
    catch(err){
        res.status(500).json({message:"Unable to load all users please try again later"})
    }
}

const SignupUser=async(req,res)=>{

    try{
        const {username,email,password,role}=req.body

    const UserExists=await UserModel.findOne({email})
    if(UserExists){
        return res.status(400).json({message:"All your Exists please Login !! Thank you"})
    }

    //HashPassword

    const HashedPassword=await bcrypt.hash(password,12)

    //create User

    const User=new UserModel({
        username,
        email,
        password:HashedPassword,
        role
    })
    const finalData=await User.save()

    res.status(201).json({
        message:"User created Successfully",
        user:{
            id:finalData._id,
            email:finalData.email,
            role:finalData.role
        }
    })
    
    }
    catch(err){
        console.log(err)
        res.status(500).send("Unable to create the user !! please try again")
    }
    
}

module.exports={LoginUser,LogoutUser,GetAllUsers,SignupUser}