const express = require("express");
const { db } = require("./db");

const app = express();

app.use(express.json());

db.connect((err) => {
  if (err) throw err;
  const sql =
    "CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created.");
  });
});

app.get("/", (request, response) => {
  const title = "<h1>Full Cycle Rocks!</h1>";
  response.send(title);
});

app.listen(3000, () => console.log("Server is running on port 3000."));
