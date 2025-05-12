const { Event, syncModels } = require('./models');

async function seedDatabase() {
    try {
        // Sync models with { force: true } to drop and recreate tables
        await syncModels({ force: true });
        
        // Create sample events
        const events = await Event.bulkCreate([
            {
                title: 'Summer Music Festival',
                description: 'A weekend of amazing performances from top artists across multiple genres.',
                date: new Date('2023-07-15T14:00:00'),
                venue: 'Central Park',
                totalTickets: 500,
                availableTickets: 500,
                price: 79.99
            },
            {
                title: 'Tech Conference 2023',
                description: 'The biggest tech conference of the year, featuring keynotes from industry leaders.',
                date: new Date('2023-08-25T09:00:00'),
                venue: 'Convention Center',
                totalTickets: 300,
                availableTickets: 300,
                price: 149.99
            },
            {
                title: 'Comedy Night',
                description: 'An evening of laughter with the best stand-up comedians in town.',
                date: new Date('2023-06-10T20:00:00'),
                venue: 'Comedy Club',
                totalTickets: 150,
                availableTickets: 150,
                price: 39.99
            }
        ]);
        
        console.log(`Created ${events.length} events`);
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seed function
seedDatabase();