const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/all", (_req, res) => {
  userModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  //Check for unique user
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    return res.status(409).send("This user already exists");
  } else {
    // Store hash in your password DB.
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      console.log(req);
      // Insert the new user if it does not exist yet
      try {
        const user = new userModel({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          picture: req.body.picture,
        });
        const payload = {
          id: user.id,
          // name: user.name,
          email: user.email,
        };
        await user.save();
        console.log("user saved");
        res.send(user);
      } catch (error) {
        console.log("error");
        res.send(error);
      }
    });
  }
});

module.exports = router;
