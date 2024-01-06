import { Types } from "mongoose";

export type TRequestedAccount ={
    name:string;
    phone:string;
    address:string;
    userCategory:Types.ObjectId;
    password:string;
    role:'user' | 'admin' | 'seller'
}