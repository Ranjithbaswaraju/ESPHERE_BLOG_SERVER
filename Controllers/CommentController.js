const { CommentModel } = require("../Models/Comment")


const PostComment=async(req,res)=>{
    try{
        const{postId,text}=req.body
        
        const PostComment=new CommentModel({
            postId,
            userId:req.user.userId,
            text
        })
        
        const finalComment=await PostComment.save()
        return res.status(200).json({message:"Added succesfully comment",finalComment})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"unable to add comment"})
    }
}

const GetComment=async(req,res)=>{
    try{
        const GetComments=await CommentModel.find()
        return res.status(200).json({
            message:"Successfully fecthed single comment",
            GetComments
        })
    }
    catch(err){
        return res.status(500).json({message:"unable to load comments"})
    }
}

module.exports={PostComment,GetComment}