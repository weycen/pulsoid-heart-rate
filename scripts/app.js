let accessPassword;

async function getConfig() {
    const response = await fetch('/api/config');
    const config = await response.json();
    accessPassword = config.accessPassword;
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
        handleResize();
    } else {
        alert("Incorrect password. Please try again.");
    }
}

async function updateHeartRate() {
    const rate = await fetchHeartRate();
    if (rate !== null) {
        document.getElementById('heartRate').textContent = `${rate} bpm`;
        updateChart(rate);
    }
}

function handleResize() {
    if (chart) {
        chart.resize();
    }
}

window.addEventListener('resize', handleResize);

// 初始化时获取配置
getConfig();