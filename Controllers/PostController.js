const { CommentModel } = require("../Models/Comment");
const { PostModel } = require("../Models/postBlog");

const PostBlog = async (req, res) => {
  try {
    const { title, content, status } = req.body;
    console.log("BODY:", req.body);

    const post = new PostModel({
      title,
      content,
      status,
      authorId: req.user.userId,
    });
    console.log(req.user.userId, "------");
    const finalData = await post.save();

    res.status(200).json({
      message: "post created successfully",
      data: {
        title: finalData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to create a blog" });
  }
};

const GetBlog = async (req, res) => {
  try {
    const allBlogs = await PostModel.find();
    return res.status(200).json({
      message: "All fected deatils below",
      allBlogs,
    });
  } catch (err) {
    return res.status(501).json({ message: "Unable to fetch users" });
  }
};

const UpdateBlog = async(req, res) => {
  try {
    const {title,content}=req.body
    const id=req.params.id

    const updatedBlog=await PostModel.findByIdAndUpdate(id,{title,content},{new:true})
    return res.status(200).json({
        message:"Succesfully blog updated",
        updatedBlog
    })
  } catch (err) {
return res.status(501).json({ message: "Unable to update blogs" });
  }
};

const DeleteBlog =async (req, res) => {
try{
  const id=req.params.id

  const deletedBlog=await PostModel.findByIdAndDelete(id)

  return res.status(200).json({
    message:"Successfully blog Deleted",
    deletedBlog
  })

}
catch(err){
return res.status(501).json({ message: "Unable to delete blogs" });

}
};
const GetSingleBlog = async(req, res) => {
 try{
    const id=req.params.id
    const singleBlog=await PostModel.findById(id)
    return res.status(200).json({
        message:"successfully the single blog fetched",
        singleBlog
    })
 }
 catch(err){
    return res.status(501).json({ message: "Unable to load single blogs" });
 }
};
module.exports = { PostBlog, GetBlog, UpdateBlog, DeleteBlog, GetSingleBlog };
