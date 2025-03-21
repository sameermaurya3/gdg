const express = require('express');
const app = express();

// Example resources data
const resources = [
    { title: 'Mathematics Basics', language: 'English', link: 'https://example.com/math' },
    { title: 'Science Intro', language: 'Hindi', link: 'https://example.com/science' },
];

// Define the /resources endpoint
app.get('/resources', (req, res) => {
    res.json(resources);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
