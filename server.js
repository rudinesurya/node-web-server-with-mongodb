require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to the database: ${db.url}!`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database: ${db.url}!`, err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app.\nVisit /api/tutorials to get or post new items." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
