const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {type: String },
  content: { type:String },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["DRAFT", "PUBLISHED"],
    default: "DRAFT",
  }
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
});

const PostModel=mongoose.model("posts",PostSchema)
module.exports={PostModel}