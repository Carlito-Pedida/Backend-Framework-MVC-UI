import { Sequelize } from "sequelize";
import { PetshopFactory } from "./petShop";

const dbName = "petDB";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

PetshopFactory(sequelize);

export const database = sequelize;
