let accessPassword;
let apiKey;

async function getConfig() {
    const response = await fetch('/api/config');
    const config = await response.json();
    accessPassword = config.accessPassword;
    apiKey = config.apiKey;
}

async function checkPassword() {
    if (!accessPassword) {
        await getConfig();
    }
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === accessPassword) {
        document.getElementById("passwordPrompt").style.display = "none";
        document.getElementById("content").style.display = "block";
        initChart();
        setInterval(updateHeartRate, 1000);
    } else {
        alert("Incorrect password. Please try again.");
    }
}

async function updateHeartRate() {
    if (!apiKey) {
        await getConfig();
    }
    const rate = await fetchHeartRate(apiKey);
    if (rate !== null) {
        document.getElementById('heartRate').textContent = `${rate} bpm`;
        updateChart(rate);
    }
}

// 初始化时获取配置
getConfig();