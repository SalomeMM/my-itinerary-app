const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const passport = require("passport");
app.use(passport.initialize()); // Passport middleware
require("./passport")(passport); // Passport configuration

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/users", require("./routes/users"));

const db = require("./keys").mongoUrl;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
