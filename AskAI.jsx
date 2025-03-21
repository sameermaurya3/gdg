import React, { useState } from 'react';
import axios from 'axios';

const AskAI = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAskAI = async () => {
        try {
            const response = await axios.post('http://localhost:5000/ask-ai', { question });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>AI-Powered Teacher</h1>
            <input
                type="text"
                placeholder="Ask your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={handleAskAI}>Ask AI</button>
            {answer && <p>Answer: {answer}</p>}
        </div>
    );
};

export default AskAI;
