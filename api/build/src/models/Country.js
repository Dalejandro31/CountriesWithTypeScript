"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Country extends sequelize_1.Model {
    }
    Country.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        flag: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        region: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        capital: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        subregion: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        population: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        createdInDb: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'Country',
        timestamps: false,
    });
    return Country;
};
