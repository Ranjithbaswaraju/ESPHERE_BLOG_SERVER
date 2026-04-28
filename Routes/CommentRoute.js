const express=require("express");
const { GetComment, PostComment } = require("../Controllers/CommentController");
const checkAuth = require("../MiddleWares/authMiddleWare");
const checkRole = require("../MiddleWares/checkRoleMiddleWare");

const router=express.Router();

router.get("/getComment",checkAuth,checkRole("admin"),GetComment)


router.post("/postComment",checkAuth,checkRole("author","admin"),PostComment)

module.exports=router