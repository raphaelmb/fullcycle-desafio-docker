const mysql = require("mysql");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "fullcycle",
};

const db = mysql.createConnection(config);

module.exports = { db };
