"use strict";
exports.__esModule = true;
exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.PG_HOST);
console.log(process.env.PG_URL);
var config = function () {
    var uri = process.env.PG_URL;
    console.log(uri);
    return uri;
};
exports.config = config;
