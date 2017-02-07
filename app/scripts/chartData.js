$('.chart-total').clone().appendTo('.chartTotalClone');
$('.chart-open').clone().appendTo('.chartOpenClone');
$('.chart-time').clone().appendTo('.chartTimeClone');

var ctx = $('.chart-total canvas');
var ctx2 = $('.chart-open canvas');
var ctx3 = $('.chart-thisMonth canvas');
var ctx4 = $('.chart-lastMonth canvas');

var chartTotalClone = $('.chartTotalClone canvas');
var chartOpenClone = $('.chartOpenClone canvas');


var chartTotalclone = new Chart(chartTotalClone, {
    type: 'doughnut',
    options: {
        responsive: false,
        cutoutPercentage: 70,
        legend: {
            display: false
        },
    },
    data: {
        labels: [
            $('.chart-total table tr').eq(0).find('td').eq(1).text(),
            $('.chart-total table tr').eq(1).find('td').eq(1).text()
        ],
        datasets: [{

            data: [$('.chart-total table tr').eq(0).find('td').eq(2).text(),
                $('.chart-total table tr').eq(1).find('td').eq(2).text()
            ],
            backgroundColor: [
                '#cbac65',
                '#00907d'
            ],
            borderWidth: 0
        }]
    }
});

var chartTotal = new Chart(ctx, {
    type: 'doughnut',
    options: {
        responsive: false,
        cutoutPercentage: 70,
        legend: {
            display: false
        },
    },
    data: {
        labels: [
            $('.chart-total table tr').eq(0).find('td').eq(1).text(),
            $('.chart-total table tr').eq(1).find('td').eq(1).text()
        ],
        datasets: [{

            data: [$('.chart-total table tr').eq(0).find('td').eq(2).text(),
                $('.chart-total table tr').eq(1).find('td').eq(2).text()
            ],
            backgroundColor: [
                '#cbac65',
                '#00907d'
            ],
            borderWidth: 0
        }]
    }
});
var chartOpen = new Chart(ctx2, {

    type: 'doughnut',

    options: {
        responsive: false,
        cutoutPercentage: 70,
        legend: {
            display: false
        },
    },
    data: {
        labels: [
            $('.chart-open table tr').eq(0).find('td').eq(1).text(),
            $('.chart-open table tr').eq(1).find('td').eq(1).text()
        ],
        datasets: [{
            data: [$('.chart-open table tr').eq(0).find('td').eq(2).text(), $('.chart-open table tr').eq(1).find('td').eq(2).text()],
            backgroundColor: [
                '#cbac65',
                '#aa8139'
            ],

        }]
    }
});
var chartOpenClone = new Chart(chartOpenClone, {

    type: 'doughnut',

    options: {
        responsive: false,
        cutoutPercentage: 70,
        legend: {
            display: false
        },
    },
    data: {
        labels: [
            $('.chart-open table tr').eq(0).find('td').eq(1).text(),
            $('.chart-open table tr').eq(1).find('td').eq(1).text()
        ],
        datasets: [{
            data: [$('.chart-open table tr').eq(0).find('td').eq(2).text(), $('.chart-open table tr').eq(1).find('td').eq(2).text()],
            backgroundColor: [
                '#cbac65',
                '#aa8139'
            ],

        }]
    }
});
Chart.plugins.register({

    afterDatasetsDraw: function(chartInstance, easing) {
        // To only draw at the end of animation, check for easing === 1
        if (chartInstance.chart.canvas.id == 'thisMonth' || chartInstance.chart.canvas.id == 'lastMonth') {
            var ctx3 = chartInstance.chart.ctx;

            chartInstance.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function(element, index) {
                        // Draw the text in black, with the specified font
                        ctx3.fillStyle = '#424242';

                        var fontSize = 16;
                        var fontStyle = 'normal';
                        var fontFamily = 'dinnRegular';
                        ctx3.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                        // Just naively convert to string for now
                        var dataString = dataset.data[index].toString();

                        // Make sure alignment settings are correct
                        ctx3.textAlign = 'center';
                        ctx3.textBaseline = 'middle';

                        var padding = 5;
                        var position = element.tooltipPosition();
                        ctx3.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                    });
                }
            });
        }
    }
});

//   Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     ctx.restore();
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = "75%",
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//     ctx.save();
//   }
// });

var thisMonth = new Chart(ctx3, {
    type: 'bar',
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        title: {
            display: true,
            text: 'الشهر الحالي نوفمبر - 2016',
            position: 'bottom',
            fontSize: 25,
            fontFamily: 'dinnRegular',
            fontStyle: 'normal'
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero: true
                },
                display: false,
                position: 'right'

            }],
            xAxes: [{
                ticks: {
                    reverse: true,
                    beginAtZero: true
                }
            }]
        }

    },

    data: {
        labels: ['الاسبوع الرابع', 'الالسبوع الثالث', 'الاسبوع الثاني', 'الاسبوع الاول'],
        datasets: [{

            backgroundColor: '#cbac65',
            data: [18, 16, 10, 16]
        }, {

            backgroundColor: '#00907d',
            data: [15, 18, 12, 21]
        }]
    }
});
var lastMonth = new Chart(ctx4, {
    type: 'bar',
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        title: {
            display: true,
            text: 'الشهر الماضي اكتوبر - 2016',
            position: 'bottom',
            fontSize: 25,
            fontFamily: 'dinnRegular',
            fontStyle: 'normal'
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero: true
                },
                display: false,
                position: 'right'

            }],
            xAxes: [{
                ticks: {
                    reverse: true,
                    beginAtZero: true
                }
            }]
        }

    },

    data: {
        labels: ['الاسبوع الرابع', 'الالسبوع الثالث', 'الاسبوع الثاني', 'الاسبوع الاول'],
        datasets: [{

            backgroundColor: '#cbac65',
            data: [18, 16, 10, 16]
        }, {

            backgroundColor: '#00907d',
            data: [15, 18, 12, 21]
        }]
    }
});


Sortable.create(listWithHandle, {
  handle: '.collection-item',
  animation: 150
  });
