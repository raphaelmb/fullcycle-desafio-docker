const express = require("express");
const { db, createAndPopupate } = require("./db");

const app = express();

app.use(express.json());

db.connect((err) => {
  if (err) throw err;
  createAndPopupate();
});

app.get("/", (request, response) => {
  db.query("SELECT * FROM people", (err, result) => {
    if (err) throw err;
    const test = result.map((elem) => `<span> ${elem.name}</span>`);
    return response.send("<h1>Full Cycle Rocks!</h1>" + test);
  });
});

app.listen(3000, () => console.log("Server is running on port 3000."));
