// const jwt=require("jsonwebtoken")
// const dotenv=require("dotenv")
// dotenv.config()
// const JWT_SECRET=superkey
// const checkAuth=(req,res,next)=>{
//     try{
//         const authHeader=req.headers.authorization;
//         console.log(authHeader)
//         if(!authHeader || !authHeader.startsWith("Bearer ")){
//             return res.status(500).json("Unauthorized")
//         }


//         const token=authHeader.split(" ")[1]
//         const decoded=jwt.verify(token,process.env.JWT_SECRET)
//         console.log(decoded)
//         req.user=decoded
//         next()
//     }
//     catch (err) {
//     return res.status(401).json({ message: "Invalid token" })
//   }
// }

// module.exports=checkAuth

const jwt = require("jsonwebtoken")
require("dotenv").config()

const checkAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET) // ✅ same as login

    // console.log(decoded)

    req.user = decoded
    next()

  } catch (err) {
    console.log(err.message)
    return res.status(401).json({ message: "Invalid token" })
  }
}

module.exports = checkAuth
