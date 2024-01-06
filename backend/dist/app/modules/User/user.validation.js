"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
        userCategory: zod_1.z.string(),
        password: zod_1.z.string(),
        role: zod_1.z.enum([...user_constant_1.UserRoles]).optional()
    })
});
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string(),
        password: zod_1.z.string()
    })
});
exports.UserValidationSchema = {
    createUserValidationSchema,
    loginValidationSchema
};
