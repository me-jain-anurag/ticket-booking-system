// Import Sequelize
const { Sequelize } = require('sequelize');
const path = require('path');

// Create database directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('./database')) {
    fs.mkdirSync('./database');
}

// Define database path
const dbPath = path.join(__dirname, '..', 'database', 'tickets.sqlite');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false // Set to console.log to see SQL queries
});

// Function to test the connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Export the sequelize instance
module.exports = sequelize;
module.exports.testConnection = testConnection;