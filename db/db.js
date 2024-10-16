import mongoose from "mongoose";
import { MONGODB_URL } from "../config/index.js";

const connectToDatabase = async () =>{
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("database connected");
        
    } catch(error) {
        console.log(error);
    }
}

export default connectToDatabase;