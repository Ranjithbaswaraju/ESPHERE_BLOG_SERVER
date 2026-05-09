
const express=require("express")
const { LoginUser, LogoutUser, GetAllUsers,SignupUser } = require("../Controllers/UserControllers")
const router=express.Router()

router.post("/loginUser",LoginUser)
router.get("/logoutUser",LogoutUser)
router.get("/getAllUsers",GetAllUsers)
router.post("/signUpUser",SignupUser)
module.exports=router