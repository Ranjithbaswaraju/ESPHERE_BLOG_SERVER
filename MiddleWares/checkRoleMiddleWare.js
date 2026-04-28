const checkRole=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            console.log("User Role:", req.user.role)
console.log("Allowed Roles:", roles)
            return res.status(500).json({Message:"Access Denied"})
        }
        next()
    }
}
module.exports=checkRole