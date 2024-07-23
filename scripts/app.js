function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const correctPassword = process.env.ACCESS_PASSWORD;
    if (enteredPassword === correctPassword) {
        document.getElementById("passwordPrompt").style.display = "none";
        document.getElementById("content").style.display = "block";
        initChart();
        setInterval(updateHeartRate, 1000);
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function updateHeartRate() {
    fetchHeartRate().then(rate => {
        if (rate !== null) {
            document.getElementById('heartRate').textContent = `${rate} bpm`;
            updateChart(rate);
        }
    });
}