// Import the express module
const express = require('express');
const path = require('path');

// Import database and models
const db = require('./config/database');
const { syncModels } = require('./models');

// Test database connection
db.testConnection();

// Sync models with database
syncModels();

// Create an Express application
const app = express();

// Create a simple route for the homepage
app.get('/', (req, res) => {
  res.send('Hello from Ticket Booking System!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});