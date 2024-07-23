let chart;
const maxDataPoints = 86400; // 24 hours * 60 minutes * 60 seconds
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
                borderWidth: 1,
                pointRadius: 0,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
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
    
    // Update color based on heart rate range
    const colors = chart.data.datasets[0].data.map(value => {
        if (value === null) return 'rgba(0, 0, 0, 0)';
        if (value < 60) return 'rgba(0, 0, 255, 0.5)'; // Blue for low
        if (value < 100) return 'rgba(0, 255, 0, 0.5)'; // Green for normal
        if (value < 140) return 'rgba(255, 165, 0, 0.5)'; // Orange for elevated
        return 'rgba(255, 0, 0, 0.5)'; // Red for high
    });
    
    chart.data.datasets[0].borderColor = colors;
    chart.data.datasets[0].backgroundColor = colors;
    
    chart.update();
}