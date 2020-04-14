const express = require("express");
const router = express.Router();
const cityModel = require("../model/cityModel");

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

// get all cities
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// city route for specific city
router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

//this is how you implement a city route by specific city
router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

// post request to add a new city
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    const newCity = new cityModel({
      name: req.body.name,
      country: req.body.country,
      picture: req.body.picture,
    });
    newCity
      .save()
      .then((city) => {
        res.send(city);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  }
);

module.exports = router;
