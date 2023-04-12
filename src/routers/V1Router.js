"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const ThemeARouter_1 = __importDefault(require("./v1/themeA/ThemeARouter"));
const ThemeBRouter_1 = __importDefault(require("./v1/themeB/ThemeBRouter"));
class V1Router {
    get router() {
        return this._router;
    }
    constructor() {
        this._router = (0, express_1.Router)();
        this._subrouterA = ThemeARouter_1.default;
        this._subrouterB = ThemeBRouter_1.default;
        this._configure();
    }
    /**
     * Connect routes to their matching routers.
     */
    _configure() {
        this._router.use('/themeA', this._subrouterA);
        this._router.use('/themeB', this._subrouterB);
    }
}
module.exports = new V1Router().router;
