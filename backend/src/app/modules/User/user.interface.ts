import { Types } from "mongoose";

export type TUser ={
    name:string;
    phone:string;
    address:string;
    userCategory:Types.ObjectId;
    password:string;
    role:'user' | 'admin' | 'seller'
}