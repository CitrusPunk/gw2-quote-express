const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const url = "http://localhost";
const port = "8081"
var corsOptions = {
  origin: `${url}:${port}`,
};

// USE
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "GW2 Quoter" });
});

require("./app/routes/quotes.routes")(app);
require("./app/routes/authors.routes")(app);


// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});