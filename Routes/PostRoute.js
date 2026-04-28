const express=require("express")
const { GetBlog, PostBlog, UpdateBlog, DeleteBlog,GetSingleBlog } = require("../Controllers/PostController")
const checkAuth = require("../MiddleWares/authMiddleWare")
const checkRole = require("../MiddleWares/checkRoleMiddleWare")
const router=express.Router()

router.get("/getBlog",checkAuth,checkRole("author" ,"admin"),GetBlog)
router.post("/postBlog",checkAuth,checkRole("author"),PostBlog)
router.put("/updateBlog/:id",checkAuth,checkRole("author"),UpdateBlog)
router.delete("/deleteBlog/:id",checkAuth,checkRole("author" ,"admin"),DeleteBlog)
router.get("/getSingleBlog/:id",checkAuth,checkRole("author" ,"admin"),GetSingleBlog)

module.exports=router
