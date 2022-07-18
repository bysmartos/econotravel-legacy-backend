"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var config_1 = require("../services/config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (payload) {
    return jsonwebtoken_1["default"].sign(payload, config_1.secret);
};
exports["default"] = {
    generateToken: generateToken
};
