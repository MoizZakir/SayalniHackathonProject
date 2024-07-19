import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    CNIC:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    name:{
        required:true,
        type:String,
        minlength:3
    },
    password:{
        required:true,
        type:String,
        minlength:8
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    otp:{
        required:true,
        type:String
    },
    expiresIn:{
        type:Number
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export default mongoose.model('User',userSchema)
