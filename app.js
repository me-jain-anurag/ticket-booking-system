// Import the express module
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// Import database and models
const db = require('./config/database');
const { syncModels } = require('./models');

// Test database connection
db.testConnection();

// Sync models with database
syncModels();

// Create an Express application
const app = express();

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const eventRoutes = require('./routes/events');

// Set up routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home - Ticket Booking System'
  });
});

// Use event routes
app.use('/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});