async function fetchHeartRate() {
    try {
        const response = await fetch('/api/heartRate');
        const data = await response.json();
        return data.data.heart_rate;
    } catch (error) {
        console.error('Error fetching heart rate:', error);
        return null;
    }
}