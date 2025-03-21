// Backend endpoint for OER
app.get('/resources', (req, res) => {
    const resources = [
        { title: 'Mathematics Basics', language: 'English', link: 'https://example.com/math' },
        { title: 'Science Intro', language: 'Hindi', link: 'https://example.com/science' },
    ];
    res.json(resources);
});

// Frontend example to display resources
import React, { useEffect, useState } from 'react';

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await axios.get('http://localhost:5000/resources');
            setResources(response.data);
        };
        fetchResources();
    }, []);

    return (
        <div>
            <h1>Open Educational Resources</h1>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.title} ({resource.language})
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;
