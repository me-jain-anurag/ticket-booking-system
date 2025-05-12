const express = require('express');
const router = express.Router();
const { Event, Booking } = require('../models');

// GET all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.render('events', { events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Server error');
    }
});

// GET single event
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        
        if (!event) {
            return res.status(404).send('Event not found');
        }
        
        res.render('event', { event });
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).send('Server error');
    }
});

// POST book tickets
router.post('/:id/book', async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        
        if (!event) {
            return res.status(404).send('Event not found');
        }
        
        const { customerName, customerEmail, ticketsBooked } = req.body;
        const numTickets = parseInt(ticketsBooked);
        
        // Validate tickets availability
        if (numTickets > event.availableTickets) {
            return res.status(400).send('Not enough tickets available');
        }
        
        // Calculate total amount
        const totalAmount = numTickets * event.price;
        
        // Create booking record
        await Booking.create({
            EventId: event.id,
            customerName,
            customerEmail,
            ticketsBooked: numTickets,
            totalAmount
        });
        
        // Update available tickets
        event.availableTickets -= numTickets;
        await event.save();
        
        // Redirect to success page (we'll create this later)
        res.redirect(`/events/${event.id}?booked=true`);
    } catch (error) {
        console.error('Error booking tickets:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;