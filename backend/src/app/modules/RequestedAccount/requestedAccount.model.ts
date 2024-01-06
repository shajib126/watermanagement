import { Schema, model } from "mongoose"
import { TRequestedAccount } from "./requestedAccount.interface"
import { UserRoles } from "../User/user.constant"
const requestedAccountSchema = new Schema<TRequestedAccount>({
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


 export const ReaquestedAccount = model<TRequestedAccount>('RequestedAccount',requestedAccountSchema)