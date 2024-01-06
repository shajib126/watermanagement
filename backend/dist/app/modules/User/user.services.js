"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const comparePassword_1 = require("../../utils/comparePassword");
const requestedAccount_model_1 = require("../RequestedAccount/requestedAccount.model");
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRegistrationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = payload;
    if (password.length < 4) {
        return 'password should be more than 4 charecter';
    }
    else {
        const user = yield requestedAccount_model_1.ReaquestedAccount.create(payload);
        return 'Your account request is pending';
    }
});
const loginUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone, password } = payload;
    const user = yield user_model_1.User.findOne({ phone });
    if (!user) {
        throw new AppError_1.default(404, 'not found');
    }
    const isMatchPassword = yield (0, comparePassword_1.matchPass)(password, user.password);
    if (!isMatchPassword) {
        throw new AppError_1.default(400, 'wrong password');
    }
    const userData = yield user_model_1.User.findById(user.id).select('-password');
    const token = yield jsonwebtoken_1.default.sign({ user }, 'secret', { expiresIn: '1d' });
    return { userData, token };
});
