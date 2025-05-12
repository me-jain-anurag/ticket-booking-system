// Import the express module
const express = require('express');
const path = require('path');

// Import database connection
const db = require('./config/database');

// Test database connection
db.testConnection();

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