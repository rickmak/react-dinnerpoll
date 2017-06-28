import Reflux from 'reflux';
import skygear from 'skygear';
import ChartActions from '../Action/ChartActions.js';
import VotingCardActions from '../Action/VotingCardActions.js';

class VotingCardStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {};
    this.listenables = VotingCardActions;
  }

  onVote(event) {
    let choice = event.target.name
    const voter = new skygear.Reference(
      "user/" + skygear.currentUser.id
    );

    const Vote = skygear.Record.extend('vote');
    const vote = new Vote({
      choice: choice
    });

    skygear.publicDB.save(vote)
    .then((record) => {
      console.log(record);
      ChartActions.updateChart();
    }, (error) => {
      console.error(error);
    });
  }
}

export default VotingCardStore;
