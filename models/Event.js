const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Event model
const Event = sequelize.define('Event', {
    // Auto-incrementing ID will be added automatically
    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    venue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalTickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    availableTickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    }
}, {
    // Model options
    timestamps: true // Adds createdAt and updatedAt
});

module.exports = Event;