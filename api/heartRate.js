const fetch = require('node-fetch');
const config = require('./api/config');

module.exports = async (req, res) => {
    const apiUrl = "https://dev.pulsoid.net/api/v1/data/heart_rate/latest";
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text(); // 先获取响应文本
        let data;
        try {
            data = JSON.parse(text); // 尝试解析 JSON
        } catch (e) {
            console.error('Failed to parse JSON:', text);
            throw new Error('Invalid JSON response from Pulsoid API');
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching heart rate:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch heart rate', 
            details: error.message,
            apiKey: config.apiKey ? config.apiKey.slice(0, 5) + '...' : 'Not set' // 只显示 API key 的一部分
        });
    }
};
