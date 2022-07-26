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
router.post('/reservas/:userId', jwtHandler_1["default"].validateTokenLogin, reservasController_1["default"].postReserva); //:userId los : indican un search params
router.get('/reservas/:userid', reservasController_1["default"].getReservasByUser);
exports["default"] = router;
