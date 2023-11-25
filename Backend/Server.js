const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const routes = require('./routes/ToDoRoute')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const username = 'new-user111';
const password = 'licet@123'; // Your actual password

// URL encode the username and password
const encodedUsername = encodeURIComponent(username);
const encodedPassword = encodeURIComponent(password);

// Replace 'atlascluster.26dnbdj.mongodb.net' and 'ToDoApp' with your actual MongoDB cluster and database name.
const mongoURI = `mongodb+srv://${encodedUsername}:${encodedPassword}@atlascluster.26dnbdj.mongodb.net/ToDoApp?retryWrites=true&w=majority`;
app.use(express.json())
app.use(cors())
mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
