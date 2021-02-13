const lyricsRouter = require("express").Router();
const Lyric = require("../models/lyric");
const bcrypt = require("bcrypt");
const User = require("../models/user");

lyricsRouter.post("/api/lyrics", async (req, res) => {
  const user = await User.findById(req.body.userId);

  const lyric = new Lyric({
    title: req.body.title,
    description: req.body.description,
    votes: req.body.votes,
    user: user._id,
  });

  try {
    const savedLyric = await lyric.save();
    user.lyrics = user.lyrics.concat(savedLyric._id); // Updates users table with corresponding lyric id.
    await user.save();
    res.json(savedLyric);
  } catch (error) {
    res.send("ERROR! ", error);
  }
});

lyricsRouter.get("/api/lyrics", async (req, res) => {
  const lyrics = await Lyric.find({});
  res.json(lyrics);
});

module.exports = lyricsRouter;
