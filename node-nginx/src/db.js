const mysql = require("mysql");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "fullcycle",
};

const db = mysql.createConnection(config);

const createAndPopupate = () => {
  const createTable =
    "CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));";
  db.query(createTable, (err, result) => {
    if (err) throw err;
    console.log("Table created.");
  });

  const populate = `INSERT INTO people(name) VALUES ("João"), ("José"), ("Maria"), ("Sara"), ("Carlos"), ("Manuel"), ("Emilia"), ("Aline");`;
  db.query(populate, (err, result) => {
    if (err) throw err;
    console.log("Insert successful.");
  });
};

module.exports = { db, createAndPopupate };
