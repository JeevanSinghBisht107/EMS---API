import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req,res,next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(404).json({ success:false, error:"Token Not Provided" })
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY)
        if(!decoded){
            return res.status(404).json({ success:false, error:"Token Not Valid" })
        }
        const user = await User.findById({ _id:decoded._id }).select('-password')
        if(!user){
            return res.status(404).json({ success:false, error:"User Not found" })
        }
        req.user = user
        next()
    } catch(error){
        return res.status(500).json({ success:false, error:"server error" })
    } 
}

const authorize = async(req,res,next) =>{
    
    if(req.user.role === "admin"){
        next();
    } else{
        const error = new Error("Unauthorized");
        error.status = 401;
        return next(error);
    }
}

export { authMiddleware,authorize }