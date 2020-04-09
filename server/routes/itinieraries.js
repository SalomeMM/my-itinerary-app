const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/test", (req, res) => {
  res.send({ msg: "Itineraries test route." });
});

module.exports = router;

/*get all itinerariess*/
router.get("/all", (_req, res) => {
  itineraryModel
    .find({})
    .then((itineraries) => {
      res.send(itineraries);
    })
    .catch((err) => console.log(err));
});
