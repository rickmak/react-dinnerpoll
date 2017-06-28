import Reflux from 'reflux';
import skygear from 'skygear';
import ChartActions from '../Action/ChartActions.js';

class ChartStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      data: [0, 0, 0, 0],
      test: false,
    };
    this.listenables = ChartActions;
  }

  onUpdateChart() {
    this.setState({test: true});
    function getVotes(food) {
      let Vote = skygear.Record.extend('vote');
      let query = new skygear.Query(Vote);
      query.equalTo('choice', food);
      query.overallCount = true;
      query.limit = 0;
      return skygear.publicDB.query(query);
    }

    let promises = Promise.all([
      getVotes('burger'), 
      getVotes('chasiu'),
      getVotes('noodles'),
      getVotes('pizza'),
    ]);
    
    promises.then(votes => {
      var data = votes.map(v => {return v.overallCount});
      console.log(data);
      this.setState({data: data});
    }).catch(error => {
      console.log(error);
    });
  }
}

export default ChartStore;
