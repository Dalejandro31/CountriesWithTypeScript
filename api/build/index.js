"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./src/db"); // Cambio aquí
const app_1 = __importDefault(require("./src/app"));
db_1.sequelize.sync({ force: true }).then(() => {
    app_1.default.listen(3001, () => {
        console.log('%s listening at 3001');
    });
});
