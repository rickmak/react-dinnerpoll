import Chart from 'chart.js';
import React from 'react';
import Reflux from 'reflux';
import skygear from 'skygear';

export default class PollingResultChart extends Reflux.Component {

  constructor(props){
    super(props);
    this.Vote = skygear.Record.extend('vote');
  }

  updateBurgerVotes() {
    this.query = new skygear.Query(this.Vote);
    this.query.equalTo('choice', 'burger');
    this.query.overallCount = true;
    this.query.limit = 0;
    skygear.publicDB.query(this.query).then((votes) => {
      console.log("burger", votes.overallCount)
      this.chart.data.datasets[0].data[0] = votes.overallCount;
      this.chart.update();
    }, (error) => {
      console.error(error);
    });
  }

  updateChasiuVotes() {
    this.query = new skygear.Query(this.Vote);
    this.query.equalTo('choice', 'chasiu');
    this.query.overallCount = true;
    this.query.limit = 0;
    skygear.publicDB.query(this.query).then((votes) => {
      console.log("chasiu", votes.overallCount)
      this.chart.data.datasets[0].data[1] = votes.overallCount;
      this.chart.update();
    }, (error) => {
      console.error(error);
    });
  }

  updateNoodlesVotes() {
    this.query = new skygear.Query(this.Vote);
    this.query.equalTo('choice', 'noodles');
    this.query.overallCount = true;
    this.query.limit = 0;
    skygear.publicDB.query(this.query).then((votes) => {
      console.log("noodles", votes.overallCount)
      this.chart.data.datasets[0].data[2] = votes.overallCount;
      this.chart.update();
    }, (error) => {
      console.error(error);
    });
  }
  
  updatePizzaVotes() {
    this.query = new skygear.Query(this.Vote);
    this.query.equalTo('choice', 'pizza');
    this.query.overallCount = true;
    this.query.limit = 0;
    skygear.publicDB.query(this.query).then((votes) => {
      console.log("pizza", votes.overallCount)
      this.chart.data.datasets[0].data[3] = votes.overallCount;
      this.chart.update();
    }, (error) => {
      console.error(error);
    });
  }

  updateVotes() {
    this.updateBurgerVotes();
    this.updateChasiuVotes();
    this.updateNoodlesVotes();
    this.updatePizzaVotes();
  }

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
                data: [0, 0, 0, 0],
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
    this.updateVotes();
  }

  render() {
    return (
      <canvas id="polling-result"></canvas>
    );
  }
}
