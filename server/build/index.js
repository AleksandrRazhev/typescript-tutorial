"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["asdfasdfasdfs"] }));
app.use(loginRoutes_1.router);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_session_1.default)({ keys: ["asdfasdfasdfs"] }));
        this.app.use(loginRoutes_1.router);
    }
    start() {
        this.app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    }
}
new Server().start();
