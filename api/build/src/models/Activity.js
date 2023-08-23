"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Activity extends sequelize_1.Model {
    }
    Activity.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        duration: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: sequelize_1.DataTypes.ENUM('Summer', 'Spring', 'Autumn', 'Winter'),
            allowNull: false,
        },
        createdInDb: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'Activity',
        timestamps: false,
    });
    return Activity;
};
