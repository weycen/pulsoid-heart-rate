const apiUrl = "https://dev.pulsoid.net/api/v1/data/heart_rate/latest";

async function fetchHeartRate() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.data.heart_rate;
    } catch (error) {
        console.error('Error fetching heart rate:', error);
        return null;
    }
}