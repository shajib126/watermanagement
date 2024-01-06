"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaquestedAccount = void 0;
const mongoose_1 = require("mongoose");
const user_constant_1 = require("../User/user.constant");
const requestedAccountSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your phone number']
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'Please provide your phone number '],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Please provide your address']
    },
    userCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
    password: {
        type: String,
        required: [true, 'please provide a secure password']
    },
    role: {
        type: String,
        enum: user_constant_1.UserRoles,
        default: 'user'
    }
}, { timestamps: true });
exports.ReaquestedAccount = (0, mongoose_1.model)('RequestedAccount', requestedAccountSchema);
