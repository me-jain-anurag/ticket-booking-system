const Event = require('./Event');
const Booking = require('./Booking');

// Define model relationships
// (Relationships are already defined in the Booking model)

// Sync all models with the database
async function syncModels() {
    try {
        // Use { force: true } to drop and recreate tables (CAUTION: deletes all data!)
        // For development only
        await Event.sync();
        await Booking.sync();
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