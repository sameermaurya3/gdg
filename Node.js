// Install dependencies first: npm install express cors body-parser
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API endpoint for handling student data
app.get('/students', (req, res) => {
    res.json({ message: 'Fetch all students data here' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
