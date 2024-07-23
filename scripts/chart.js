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
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category',
                    labels: Array(maxDataPoints).fill('')
                },
                y: {
                    beginAtZero: false,
                    suggestedMin: 30,
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
