<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="card-shadow bg-white rounded-lg mt-10" v-for="item, index in data" :key="index">
            <LineChart :chartData="item.chartData" :options="item.options" class="chart-inner"/>
        </div>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { LineChart } from 'vue-chart-3';
import { defineComponent } from 'vue';

Chart.register(...registerables);

export default defineComponent({
  name: 'Chart',
  components: {
    LineChart,
  },
  setup() {
        const data = [
            {
                chartData: {
                    labels: ['1 June', '8 July', '16 Aug', '24 Sept', '15 Oct'],
                    datasets: [
                        {
                            data: [48000, 120000, 36000, 62000, 42000],
                            backgroundColor: '#A9C1FD',      
                            lineTension: 0.4,        
                            radius: 6,
                            borderColor: '#336CFB', 
                            color: '#A0A4A8',
                        },
                    ],
                },

                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 120000,
                            ticks: {
                                stepSize: 20000
                            },
                            grid: {
                                borderDash: [5,15],
                                borderColor: '#D7DBDE',
                                drawTicks: false,
                                drawBorder:  false
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                drawTicks: true,
                            }
                        },
                    },
                    layout: {
                        padding: 24,
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Income in current month',
                            align: 'end',
                            font: {
                                size: 12,
                                color: "#A0A4A8",
                                weight: "bold",
                                family: 'Lato, sans-serif',
                            },
                        },
                        subtitle: {
                            display: true,
                            text: '$112,174',
                            align: 'start',
                            position: 'top',
                            font: {
                                size: 20,
                                color: "#25282B",
                                weight: "bold",
                                family: 'Lato, sans-serif',
                            },
                            padding: {
                                top: 10,
                                bottom: 20
                            }
                        }
                    },
                }
            },

            {
                chartData: {
                    labels: ['25 Apr', '26 May', '27 Jun', '28 Jul', '29 Aug', '30 Sep', '15 Oct'],
                    datasets: [
                        {
                            data: [3150, 1800, 2950, 2050, 3900, 950, 2700],
                            backgroundColor: '#FAC032',      
                            lineTension: 0.4,        
                            radius: 6,
                            borderColor: '#FCDF98', 
                        },
                    ],
                },

                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 5000,
                            ticks: {
                                stepSize: 1000,
                            },
                            grid: {
                                borderDash: [5,15],
                                borderColor: '#D7DBDE',
                                drawTicks: false,
                                drawBorder:  false
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                drawBorder:  true,
                                drawTicks: true,
                            }
                        },
                    },
                    layout: {
                        padding: 24,
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Total Number of Appointment',
                            align: 'end',
                            font: {
                                size: 12,
                                color: "#A0A4A8",
                                weight: "bold",
                                family: 'Lato, sans-serif',
                            },
                        },
                        subtitle: {
                            display: true,
                            text: 5210,
                            align: 'start',
                            position: 'top',
                            font: {
                                size: 20,
                                color: "#25282B",
                                weight: "bold",
                                family: 'Lato, sans-serif',
                            },
                            padding: {
                                top: 10,
                                bottom: 20
                            }
                        }
                    },
                }
            }
        ]

    return {  data };
  },
});
</script>
<style>
    .jk{
        --height: 286px;
        --width: 540px;
    }
    .chart {
        height: var(--height);
        width: var(--width);
    }
    .chart-inner{
        height: calc(var(--height) - 48);
        width: calc(var(--width) - 48);
    }
</style>