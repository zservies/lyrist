const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const lyricSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  votes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

lyricSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

lyricSchema.plugin(uniqueValidator);

const Lyric = mongoose.model("Lyric", lyricSchema);

module.exports = Lyric;
