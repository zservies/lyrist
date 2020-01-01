const express = require('express');

const app = express();

// Set headers.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      "id": "1",
      "title": "Lyric 1",
      "body": "Some great lyrics from server."
    },
    {
      "id": "2",
      "title": "Lyric 2",
      "body": "Some great lyrics again from server."
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully.",
    posts: posts
  });
});

module.exports = app;
