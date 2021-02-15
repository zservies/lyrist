const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config.js");
const usersRouter = require("./controllers/users");
const lyricsRouter = require("./controllers/lyrics");
const loginRouter = require("./controllers/login");

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(lyricsRouter);
app.use(loginRouter);

module.exports = app;
