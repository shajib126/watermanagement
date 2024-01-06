
import {z} from 'zod'
import { UserRoles } from './user.constant'

const createUserValidationSchema = z.object({
    body:z.object({
        name:z.string(),
        phone:z.string(),
        address:z.string(),
        userCategory:z.string(),
        password:z.string(),
        role:z.enum([...UserRoles as [string, ...string[]]]).optional()
    })
})

const loginValidationSchema = z.object({
    body:z.object({
        phone:z.string(),
        password:z.string()
    })
})

export const UserValidationSchema = {
    createUserValidationSchema,
    loginValidationSchema
}