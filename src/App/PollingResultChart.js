import Chart from 'chart.js';
import React from 'react';
import Reflux from 'reflux';
import ChartActions from './Action/ChartActions.js';

export default class PollingResultChart extends Reflux.Component {
  componentDidMount() {
    this.ctx = document.getElementById('polling-result').getContext('2d');
    this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: ["burger", "chasiu", "noodles", "pizza",],
            datasets: [{
                label: "Votes",
                backgroundColor: Chart.helpers.color('rgb(54, 162, 235)').alpha(0.5).rgbString(),
                borderColor: 'rgb(54, 162, 235)',
                data: this.props.data,
            }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Polling Result'
          },
          scales: { 
            yAxes: [{ 
              ticks: { 
                min: 0,
                beginAtZero:true 
              } 
            }] 
          },
        }
    });
    ChartActions.updateChart();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.data.datasets[0].data = nextProps.data;
    this.chart.update();
  }

  render() {
    return (
      <canvas id="polling-result"></canvas>
    );
  }
}
