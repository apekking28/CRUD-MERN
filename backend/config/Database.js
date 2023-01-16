import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "Lana_12345", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default db;
