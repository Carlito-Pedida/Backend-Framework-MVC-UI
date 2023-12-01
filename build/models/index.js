"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const petShop_1 = require("./petShop");
const dbName = "petDB";
const username = "root";
const password = "Password1!";
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
});
(0, petShop_1.PetshopFactory)(sequelize);
exports.database = sequelize;
