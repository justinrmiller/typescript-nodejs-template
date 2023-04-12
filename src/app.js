"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const V1Router_1 = __importDefault(require("./routers/V1Router"));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.v1Router = V1Router_1.default;
    }
}
// initialize server app
const server = new Server();
// make server app handle any route starting with '/api'
server.app.use('/api/v1', server.v1Router);
// make server app handle any error
server.app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});
// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
