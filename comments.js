// Create web server with express.js
const express = require('express');
const app = express();

// Create a route for GET request
app.get('/comments', (req, res) => {
    // Send JSON response
    res.json([
        { id: 1, author: 'John', body: 'Hello, world!' },
        { id: 2, author: 'Jane', body: 'Hi, there!' },
    ]);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});