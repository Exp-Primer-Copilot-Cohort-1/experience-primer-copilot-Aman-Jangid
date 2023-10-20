// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// Create a model
const Comment = mongoose.model('Comment', {
    username: String,
    content: String
});