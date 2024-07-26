let chart;
const maxDataPoints = 360;
const initialData = Array(maxDataPoints).fill(null);

function initChart() {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(maxDataPoints).fill(''),
            datasets: [{
                label: 'Heart Rate',
                data: initialData,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false,
                pointRadius: 0,  // 设置点的半径为0，即不显示点
                pointHoverRadius: 0,  // 鼠标悬停时也不显示点
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category',
                    labels: Array(maxDataPoints).fill(''),
                    reverse: false,  // 从右到左显示
                    grid: {
                        drawBorder: false,
                        display: false,  // 去掉 x 轴线
                    },
                    ticks: {
                        maxTicksLimit: 5,
                        maxRotation: 0,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: false,
                    suggestedMin: 40,
                    suggestedMax: 200
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function updateChart(newValue) {
    chart.data.datasets[0].data.push(newValue);
    chart.data.datasets[0].data.shift();
    chart.update();
}
