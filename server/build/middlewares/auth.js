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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcrypt_1 = __importDefault(require("bcrypt"));
var userModel_1 = __importDefault(require("../model/userModel"));
var hashingPassword = function (password) {
    var saltRounds = 10;
    return bcrypt_1["default"].hash(password, saltRounds);
};
var encryptPassword = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var saltRounds, passwordHash, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                if (!(req.body.password === undefined)) return [3 /*break*/, 1];
                res.send('password missing');
                return [3 /*break*/, 3];
            case 1:
                saltRounds = 10;
                return [4 /*yield*/, bcrypt_1["default"].hash(req.body.password, saltRounds)];
            case 2:
                passwordHash = _a.sent();
                req.body.password = passwordHash;
                next();
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.status(500).send('internal error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var validateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, result, comparePassword, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    throw new Error('email or password not exist');
                }
                return [4 /*yield*/, userModel_1["default"].getUser({ email: email, password: password })];
            case 1:
                result = _b.sent();
                return [4 /*yield*/, bcrypt_1["default"].compare(password, result.password)];
            case 2:
                comparePassword = _b.sent();
                if (comparePassword) {
                    // si todo va bien llama a next()
                    next();
                }
                else {
                    // si va mal respuesta código 400 las passwords no coinciden
                    throw new Error('password not valid');
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(400).send(error_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports["default"] = { encryptPassword: encryptPassword, validateUser: validateUser, hashingPassword: hashingPassword };
/*import { Response,Request,NextFunction, request } from "express";
import bcryptjs from 'bcryptjs';
import userModel from "../model/userModel";

export const encryptPassword = async (req:Request,res:Response,next:NextFunction)=>{

    try {
        if(req.body.password!==undefined){
            res.send('password missing');
        } else {
        const saltRounds = 10;
        const passwordHash = await bcryptjs.hash(req.body.password,saltRounds);
        req.body.password = passwordHash;
        next();}

    } catch (error) {
        res.status(500).send('internal error');
    }
}

/*export const validateUser = async (req:Request, res:Response, next:NextFunction)=>{
    
    try {
        //obtiene email y password de la request.
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).send('user or password');
        }
        const result = await userModel.getUser({email,password})
        //compara
        const comparePassword = await bcryptjs.compare(password,saltRounds);
        if (comparePassword) {
            next();
            req.body.password = passwordHash;
        }
        }

    } catch (error) {
        res.status(500).send('internal error');
    }


    /*obtiene email y password de la request.
    llama a la bbdd recupera email y password
    compara la password de la request con la password de la bbdd
    si todo va bien llama a next()
    si va mal respuesta código 400 las passwords no coinciden*/
//}
//export default {encryptPassword, /*validateUser*/};
//export default encryptPassword;
