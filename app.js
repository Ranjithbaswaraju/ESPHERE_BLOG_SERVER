const express=require("express")
const app=express()
const port=3100;

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
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})