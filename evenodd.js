const express = require('express');
const app = express();

// Middleware to parse JSON input
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Even/Odd Checker API. Use "/check" with a number query parameter.');
});

// Route to check if a number is even or odd
app.get('/check', (req, res) => {
    const number = parseInt(req.query.number);

    // Check if the number is a valid integer
    if (isNaN(number)) {
        return res.status(400).send('Please provide a valid number.');
    }

    if (number % 2 === 0) {
        res.send(`${number} is even.`);
    } else {
        res.send(`${number} is odd.`);
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

