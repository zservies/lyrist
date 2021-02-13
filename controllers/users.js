const usersRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

usersRouter.post("/", async (req, res) => {
  const body = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds); // Creates password hash.

  // Only store the password hash into the DB, NOT THE PASSWORD.
  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.send(error);
  }
});

usersRouter.get("/", async (req, res) => {
  const users = await User.find({}).populate('lyrics'); // Populate query with actual lyrics rather than just lyric ids.
  res.json(users);
});

module.exports = usersRouter;
