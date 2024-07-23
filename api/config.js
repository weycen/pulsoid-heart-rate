module.exports = (req, res) => {
    res.status(200).json({
        accessPassword: process.env.ACCESS_PASSWORD,
        apiKey: process.env.API_KEY
    });
};