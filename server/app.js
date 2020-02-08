const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const LyricPost = require('./models/lyric-post'); // import lyric-post model.

app.use(bodyParser.json());


// Set headers.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new LyricPost({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body
  });
  
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

app.get('/api/posts',(req, res, next) => {
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
    },
    {
      "id": "3",
      "title": "Another Lyric",
      "author": "Zach",
      "body": "Here are the lyrics you should read."
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully.",
    posts: posts
  });
});

module.exports = app;
