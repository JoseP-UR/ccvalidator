"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
var routes_1 = __importDefault(require("./api/routes"));
(0, dotenv_1.config)();
var port = process.env.APP_PORT || 3000;
var devClientPort = process.env.DEV_CLIENT_PORT || 3001;
var appEnv = process.env.APP_ENV || "development";
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
if (appEnv === "production") {
    app.use(express_1.default.static('public'));
}
app.get("/", function (req, res) {
    res.redirect("http://localhost:".concat(devClientPort));
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port, " \uD83D\uDE80"));
});
//# sourceMappingURL=index.js.map