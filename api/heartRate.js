const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiUrl = "https://dev.pulsoid.net/api/v1/data/heart_rate/latest";
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching heart rate:', error);
        res.status(500).json({ error: 'Failed to fetch heart rate' });
    }
};