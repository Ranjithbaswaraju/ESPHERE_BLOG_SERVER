const express=require("express")
const app=express()
const port=3100;
const cors=require("cors")

const { ConnectDB } = require("./db_configure/db");
const UserRoutes=require("./Routes/userRoutes")
const CommentRoutes=require("./Routes/CommentRoute")
const PostRoutes=require("./Routes/PostRoute")
app.use(express.json())
app.use(express.urlencoded())

app.use("/apiUser",UserRoutes)
app.use("/apiComment",CommentRoutes)
app.use("/apiPosts",PostRoutes)

ConnectDB()

app.use(cors({
    origin:["https://esphere-blog-client-v3d3.vercel.app/"]
}))
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})