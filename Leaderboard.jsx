const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await axios.get('http://localhost:5000/leaderboard');
            setLeaders(response.data);
        };
        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {leaders.map((leader, index) => (
                    <li key={index}>{leader.name}: {leader.points} points</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
