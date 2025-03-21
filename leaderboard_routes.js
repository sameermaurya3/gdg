// Endpoint to get leaderboard data
app.get('/leaderboard', (req, res) => {
    const leaderboard = [
        { name: 'Alice', points: 1200 },
        { name: 'Bob', points: 1100 },
        { name: 'Charlie', points: 900 },
    ];
    res.json(leaderboard);
});
