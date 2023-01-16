import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "Lana_12345", {
  host: "127.0.0.1",
  dialect: "mysql",
});

db.sync({});
db.authenticate()
  .then(() => {
    console.log("Connection has been successfully conection to database");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default db;
