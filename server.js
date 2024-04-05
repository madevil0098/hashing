const express = require('express');
const crypto = require('crypto');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for processing input data
app.post('/process', (req, res) => {
    const inputData = req.body.input_data;

    // Example operation: doubling the input
    const hashedData = crypto.createHash('sha384').update(inputData).digest('hex');

    // Send the hashed data as response
    res.json({ result: hashedData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
