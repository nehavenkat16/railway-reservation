const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Dummy database for storing reservations (in-memory storage for simplicity)
let reservations = [];

// Post endpoint to book a train ticket
app.post('/book-ticket', (req, res) => {
    const { train, source, destination, date, seats } = req.body;
    
    if (!train || !source || !destination || !date || !seats) {
        return res.status(400).send('All fields are required');
    }

    // Store reservation in the "database"
    const reservation = {
        train,
        source,
        destination,
        date,
        seats,
    };
    reservations.push(reservation);

    res.status(200).json({ message: 'Ticket booked successfully', reservation });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});