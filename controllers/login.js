const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

loginRouter.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username }); // Search for user in MongoDB.

  // If password isn't null compare password to hash using bcrypt.
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(req.body.password, user.passwordHash);

  // If no user is found or the password is incorrect send error.
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "INVALID USERNAME OR PASSWORD",
    });
  }

  // If password is correct -> sign token with username and id.
  const userForToken = {
    username: user.username,
    id: user._id,
  };

  // Assign token to SECRET env variable.
  const token = jwt.sign(userForToken, process.env.SECRET);

  // Send frontend token and user info.
  res
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;
