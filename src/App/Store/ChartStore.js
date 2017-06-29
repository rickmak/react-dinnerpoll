import Reflux from 'reflux';
import skygear from 'skygear';
import ChartActions from '../Action/ChartActions.js';

class ChartStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      labels: [''],
      data: [0],
    };
    this.listenables = ChartActions;
  }

  onUpdateChart() {
    function getVotes(food) {
      let Vote = skygear.Record.extend('vote');
      let query = new skygear.Query(Vote);
      query.equalTo('choice', food);
      query.overallCount = true;
      query.limit = 0;
      return skygear.publicDB.query(query);
    }

    // get labels
    skygear.lambda('distinct')
      .then(res => {
        console.log(res);
        let choices = res.response;
        let labels = choices.map((choiceObj) => {
          return choiceObj.choice
        })
        let promises = labels.map((label) => {
          return getVotes(label)
        })
        Promise.all(promises).then(votes => {
          let data = votes.map(v => {return v.overallCount});
          console.log(labels)
          console.log(data);
          this.setState({
            labels: labels,
            data: data,
          });
        }).catch(error => {
          console.log(error);
        });
      });
  }
}

export default ChartStore;
