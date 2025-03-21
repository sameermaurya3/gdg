const axios = require('axios');

// API Key for Gemini (replace with actual API Key) 
const GEMINI_API_KEY = 'put your api key';

// Endpoint for asking questions
app.post('/ask-ai', async (req, res) => {
    const userQuery = req.body.question;

    try {
        const response = await axios.post('https://gemini-api.com/ask', {
            query: userQuery,
        }, {
            headers: { Authorization: `Bearer ${GEMINI_API_KEY}` }
        });

        res.json({ answer: response.data.answer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get response from AI' });
    }
});
