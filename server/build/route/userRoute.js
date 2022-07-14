"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controller/userController"));
//import encryptPassword from '../middleware/auth';
var router = (0, express_1["default"])();
router.post('/user', userController_1["default"]);
exports["default"] = router;
