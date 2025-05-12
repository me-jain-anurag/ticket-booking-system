const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./Event');

// Define the Booking model
const Booking = sequelize.define('Booking', {
    // Auto-incrementing ID will be added automatically
    
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    customerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    ticketsBooked: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    // Model options
    timestamps: true // Adds createdAt and updatedAt
});

// Define relationship: An Event can have many Bookings
Event.hasMany(Booking);
// A Booking belongs to one Event
Booking.belongsTo(Event);

module.exports = Booking;