"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetshopFactory = exports.Petshop = void 0;
const sequelize_1 = require("sequelize");
class Petshop extends sequelize_1.Model {
}
exports.Petshop = Petshop;
function PetshopFactory(sequelize) {
    Petshop.init({
        petId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        createdOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        freezeTableName: true,
        tableName: "petshop",
        sequelize,
    });
}
exports.PetshopFactory = PetshopFactory;
