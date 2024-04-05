const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (CSS, JavaScript, etc.)
app.use(express.static('public'));

// Endpoint for processing input data
app.post('/process', (req, res) => {
    const inputData = req.body.input_data;

    // Create a SHA-384 hash object
    const hash = crypto.createHash('sha384');

    // Update the hash with the input data
    hash.update(inputData);

    // Get the hexadecimal digest of the hash
    const hashedData = hash.digest('hex');

    // Send the hashed data as response
    res.json({ result: hashedData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
