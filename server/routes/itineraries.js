const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

// test get request
// router.get("/test", (req, res) => {
//   res.send({ msg: "Itineraries test route." });
// });

// get all itineraries
router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// get itineraries by city
router.get("/:city", (req, res) => {
  let itineraryRequested = req.params.city;
  itineraryModel
    .find({ city: itineraryRequested })
    .then((itinerary) => {
      res.send(itinerary);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
