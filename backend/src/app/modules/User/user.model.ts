 import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcryptjs'
import { UserRoles } from "./user.constant";

 const userSchema = new Schema<TUser>({
    name:{
        type:String,
        required:[true,'Please provide your phone number']
    },
    phone:{
        type:String,
        unique:true,
        required:[true,'Please provide your phone number '],
        trim:true
    },
    address:{
        type:String,
        required:[true,'Please provide your address']
    },
    userCategory:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    password:{
        type:String,
        required:[true,'please provide a secure password']
    },
    role:{
        type:String,
        enum:UserRoles,
        default:'user'
    }
 },{timestamps:true})

 userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next()
 })
 export const User = model<TUser>('User',userSchema)