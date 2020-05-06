const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const key = require("../keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .find({})
      .then((files) => {
        res.send(files);
      })
      .catch((err) => console.log(err));
  }
);

// User registration / sign up

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
          auth: false,
          picture: req.body.picture,
        });
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        // Sign token
        jwt.sign(
          payload,
          key.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },

          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );

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

// Common log in

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  userModel.findOne({ email }).then((user) => {
    // Check if user exists
    console.log("user", user);
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    if (user.auth) {
      return res.status(404).json({ err: "Login with Google" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch, err) => {
      console.log("error: ", err);
      console.log("isMatch: ", isMatch);
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          picture: user.picture,
        };

        // Sign token
        jwt.sign(
          payload,
          key.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },

          (err, token) => {
            console.log(err);
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ err: "Password incorrect" });
      }
    });
  });
});
///////////authentication for the user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .findOne({ _id: req.user.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) =>
        res.status(404).json({ error: "Thisser does not exist" })
      );
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .findOne({ _id: req.user.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(404).json({ error: "User does not exist!" }));
  }
);

// Google log in

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    const user = req.user;
    console.log(req.user);

    //generate token
    //Sign token

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      picture: user.picture,
    };

    jwt.sign(
      payload,
      key.secretOrKey,
      {
        expiresIn: 31556926, // 1 year in seconds
      },

      (err, token) => {
        // Successful authentication, redirect home.with query code
        res.redirect("http://localhost:3000/?code=" + token);
      }
    );
  }
);

router.get("/test", (req, res) => {
  res.send({ msg: "Users test route." });
});

module.exports = router;

//Log out

router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel.findOne({ _id: req.user.id }).then((user) => {
      user.loggedIn = false;
      user.save();
      res.json("logged out");
    });
  }
);

//logout route calling passport functions

// router.get(
//   "/logout",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     userModel.findOne({ _id: req.user.id }).then(user => {
//       user.loggedIn = false;
//       user.save();
//       res.json("logged out");
//     });
//   }

// router.get("/logout", (req, res) => {
//   userModel.findOne(req.body.email).then((user) => {
//     console.log("user", user);
//     props.history.push("/login");
//   });
// });
