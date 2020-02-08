const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Database connection
mongoose.connect('mongodb+srv://Zach:syDXOEGPq3LRVetB@cluster0-8oekr.mongodb.net/lyrics?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected database!');
  })
  .catch(()=>{
    console.log('Something went wrong.');
  }); 


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
  post.save(); 
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

app.get('/api/posts',(req, res, next) => {
  // Returns all entries from MongoDB.
  LyricPost.find()
    .then(documents => {
      // Response must be in callback.
      res.status(200).json({
        message: "Posts fetched successfully.",
        posts: documents
      });
    });
});

module.exports = app;
