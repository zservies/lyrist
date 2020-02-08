const mongoose = require('mongoose');

const lyricSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    body: { type: String, required: true }
});

module.exports = mongoose.model('LyricPost', lyricSchema);