"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var reservasController_1 = __importDefault(require("../controller/reservasController"));
var jwtHandler_1 = __importDefault(require("../middlewares/jwtHandler"));
var router = (0, express_1.Router)();
router.get('/reservas', jwtHandler_1["default"].validateTokenRole, reservasController_1["default"].getReservas);
exports["default"] = router;
