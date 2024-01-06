import AppError from "../../errors/AppError";
import { matchPass } from "../../utils/comparePassword";
import { TRequestedAccount } from "../RequestedAccount/requestedAccount.interface";
import { ReaquestedAccount } from "../RequestedAccount/requestedAccount.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken'

const userRegistrationIntoDB =async (payload:TRequestedAccount) => {
    const {password} = payload
    if(password.length < 4){
        return 'password should be more than 4 charecter'
    }else{
        const user = await ReaquestedAccount.create(payload)
        return 'Your account request is pending'
    }
}

const loginUserIntoDB =async (payload:Partial<TUser>) => {
    const {phone,password} = payload
    const user = await User.findOne({phone})
    if(!user){
        throw new AppError(404,'not found')
    }
    const isMatchPassword = await matchPass(password as string,user.password)
    if(!isMatchPassword){
        throw new AppError(400,'wrong password')
    }
    const userData = await User.findById(user.id).select('-password')
    const token = await jwt.sign({user},'secret',{expiresIn:'1d'})
    return {userData,token}
}