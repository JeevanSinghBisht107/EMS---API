import User from "../models/User.js"
import Employee from "../models/Employee.js"
import multer from "multer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });

const login = async(req,res,next) => {
    try{
        const { email,password } = req.body;
        const user = await User.findOne({email})
        if(!user){
            const error = new Error("Email not found");
            error.status = 404;
            return next(error);
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            const error = new Error("Wrong Password");
            error.status = 404;
            return next(error);
    }
        const token = jwt.sign({_id:user._id, role: user.role},
            process.env.JWT_KEY, { expiresIn:"10d" }
        )

        res.status(200).json({ success:true, token, user: {_id:user._id, name:user.name, role:user.role},
         });
    } catch(error){
        next(error);
    }
};

const signup = async(req,res) => {
    try{
       const
        { name,email,employeeId,dob,gender,maritalStatus,
            designation,department,password } = req.body;
        
         const user = await User.findOne({ email });
         if(user){
            return res.status(400).json({ success:false, error:"Email already registered" });
         }

         const hashPassword = await bcrypt.hash(password,10);

         const newUser = new User({
            name,email,password:hashPassword,
            profileImage:req.file ? req.file.filename : "",
         });
         const savedUser = await newUser.save();

         const newEmployee = new Employee({
            userId: savedUser._id,
            employeeId,
            dob,
            gender,
            maritalStatus,
            designation,
            department,
          });
      
          await newEmployee.save();
          return res.status(200).json({ success: true, message: "User Signed up" });
    } catch (error){
        console.log(error);
        
        return res
      .status(500)
      .json({ success: false, error: "server error in signing up " });
  
    }
}

const verify = (req,res) =>{
    return res.status(200).json({ success:true, user:req.user })
}

export { login,signup,upload,verify }