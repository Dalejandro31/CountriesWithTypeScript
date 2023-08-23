"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = exports.Country = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});
exports.sequelize = sequelize;
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
modelDefiners.forEach(model => model(sequelize));
fs_1.default.readdirSync(path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
    .forEach((file) => {
    modelDefiners.push(require(path_1.default.join(__dirname, '/models', file)).default(sequelize));
});
const { Country, Activity } = sequelize.models;
exports.Country = Country;
exports.Activity = Activity;
Activity.belongsToMany(Country, { through: 'ActivityCountry', timestamps: false });
Country.belongsToMany(Activity, { through: 'ActivityCountry', timestamps: false });
