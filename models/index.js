const Event = require('./Event');
const Booking = require('./Booking');

// Define model relationships
// (Relationships are already defined in the Booking model)

// Sync all models with the database
async function syncModels(options = {}) {
    try {
        // Use { force: true } to drop and recreate tables (CAUTION: deletes all data!)
        await Event.sync(options);
        await Booking.sync(options);
        console.log('Models synchronized with database');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
}

module.exports = {
    Event,
    Booking,
    syncModels
};