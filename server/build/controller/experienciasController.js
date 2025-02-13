"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var experienciasModel_1 = __importDefault(require("../model/experienciasModel"));
var experienciasController = {
    getExperiencias: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var exp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, experienciasModel_1["default"].getExperiencias()];
                case 1:
                    exp = _a.sent();
                    res.json(exp);
                    return [2 /*return*/];
            }
        });
    }); },
    postExperiencia: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, experiencias, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = req.body, titulo = _a.titulo, imagen = _a.imagen, descripcion = _a.descripcion, precio = _a.precio, duracionhoras = _a.duracionhoras, accesibilidad = _a.accesibilidad, ubicacion = _a.ubicacion, transporte = _a.transporte, duracion = _a.duracion, experiencias = __rest(_a, ["titulo", "imagen", "descripcion", "precio", "duracionhoras", "accesibilidad", "ubicacion", "transporte", "duracion"]);
                    if (!(!titulo || !imagen || !descripcion || !precio || !duracionhoras || !accesibilidad || !ubicacion || !transporte || !duracion)) return [3 /*break*/, 1];
                    res.status(400).json({ message: 'some info is missing' });
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, experienciasModel_1["default"].postExperiencia(__assign({ titulo: titulo, imagen: imagen, descripcion: descripcion, precio: precio, duracionhoras: duracionhoras, accesibilidad: accesibilidad, ubicacion: ubicacion, transporte: transporte, duracion: duracion }, experiencias))];
                case 2:
                    result = _b.sent();
                    result
                        ? res.status(201).json({ result: result.rows })
                        : res.status(500).send('No se pudo crear una nueva experiencia');
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    res.status(400).send(error_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    updateExperiencia: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var param, _a, titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, experiencias, result, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    param = req.params['id'];
                    _a = req.body, titulo = _a.titulo, imagen = _a.imagen, descripcion = _a.descripcion, precio = _a.precio, duracionhoras = _a.duracionhoras, accesibilidad = _a.accesibilidad, ubicacion = _a.ubicacion, transporte = _a.transporte, duracion = _a.duracion, experiencias = __rest(_a, ["titulo", "imagen", "descripcion", "precio", "duracionhoras", "accesibilidad", "ubicacion", "transporte", "duracion"]);
                    if (!titulo || !imagen || !descripcion || !precio || !duracionhoras || !accesibilidad || !ubicacion || !transporte || !duracion) {
                        res.status(400).json({ message: 'some info is missing' });
                    }
                    return [4 /*yield*/, experienciasModel_1["default"].updateExperiencia(__assign({ titulo: titulo, imagen: imagen, descripcion: descripcion, precio: precio, duracionhoras: duracionhoras, accesibilidad: accesibilidad, ubicacion: ubicacion, transporte: transporte, duracion: duracion }, experiencias), param)];
                case 1:
                    result = _b.sent();
                    result
                        ? res.status(201).json({ result: result.rows })
                        : res.status(500).send('No se pudo crear una nueva experiencia');
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    res.status(400).send(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteExperiencia: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var param, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    param = req.params['id'];
                    return [4 /*yield*/, experienciasModel_1["default"].deleteExperiencia(param)];
                case 1:
                    result = _a.sent();
                    result
                        ? res.status(201).json({ result: "Experiencia deleted with ID: ".concat(param) })
                        : res.status(500).send('No se pudo borrar una nueva experiencia');
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(400).send(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOneExperiencia: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var param, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    param = req.params['id'];
                    return [4 /*yield*/, experienciasModel_1["default"].getOneExperiencia(param)];
                case 1:
                    result = _a.sent();
                    result
                        ? res.status(201).json(result)
                        : res.status(500).send('No se pudo borrar una nueva experiencia');
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(400).send(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    postExperienciaFilter: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var searcher, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searcher = req.body.searcher;
                    return [4 /*yield*/, experienciasModel_1["default"].postExperienciaFilter({ searcher: searcher })];
                case 1:
                    result = _a.sent();
                    result
                        ? res.status(201).json(result)
                        : res.status(500).send('No se pudo filtrar una  experiencia');
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(400).send(error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = experienciasController;
