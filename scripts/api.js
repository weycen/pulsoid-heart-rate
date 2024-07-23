const apiUrl = "https://dev.pulsoid.net/api/v1/data/heart_rate/latest";

async function fetchHeartRate(apiKey) {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
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