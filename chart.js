const ctxChart = document.getElementById('skillChart');

new Chart(ctxChart, {
  type: 'bar',
  data: {
    labels: ['Python', 'Flutter', 'Firebase', 'ML'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 80, 75],
      backgroundColor: '#00f7ff'
    }]
  },
  options: {
    animation: {
      duration: 2000
    },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});
