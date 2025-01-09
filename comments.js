// Create web server
const express = require('express');
const app = express();
// Allow cross-origin requests
const cors = require('cors');
app.use(cors());
// Use JSON
app.use(express.json());
// Use comments.js
const comments = require('./comments');
app.use('/comments', comments);
// Listen on port 4001
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});