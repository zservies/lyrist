const lyricsRouter = require("express").Router();
const Lyric = require("../models/lyric");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Helper function to isolate token from authorization header.
// Move to helper file later.
const getTokenFrom = (request) => {
  const authz = request.get("authorization");
  if (authz && authz.toLowerCase().startsWith("bearer ")) {
    return authz.substring(7);
  }
  return null;
};

lyricsRouter.post("/api/lyrics", async (req, res) => {
  // Get token
  const token = getTokenFrom(req);
  // Verify token against stored SECRET.
  const decodedToken = jwt.verify(token, process.env.SECRET);
  // If no token or no decoded token send error.
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "TOKEN MISSING OR INVALID" });
  }

  // Find user by decoded token id.
  const user = await User.findById(decodedToken.id);

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
