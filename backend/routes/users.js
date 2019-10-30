const router = require("express").Router();
let user = require("../models/user.model");

// to get all users
router.route("/").get((req, res) => {
  user
    .find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

//to insert a new user
router.route("/").post((req, res) => {
  const username = req.body.username;

  const newUser = new user({ username });

  newUser
    .save()
    .then(doc => {
      res.status(201);
      return res.json(doc);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  user
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
