// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express app
const app = express();
// Use cors
app.use(cors());
// Use body parser
app.use(bodyParser.json());

// Create comments object
const commentsByPostId = {};

// Create route to get comments by post id
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create route to create comment
app.post('/posts/:id/comments', (req, res) => {
  // Create id for comment
  const commentId = randomBytes(4).toString('hex');
  // Get content from request
  const { content } = req.body;
  // Get comments from post id
  const comments = commentsByPostId[req.params.id] || [];
  // Push new comment to comments
  comments.push({ id: commentId, content });
  // Set comments to post id
  commentsByPostId[req.params.id] = comments;
  // Send status 201 and comments
  res.status(201).send(comments);
});

// Listen to port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});