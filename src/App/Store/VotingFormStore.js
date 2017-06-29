import Reflux from 'reflux';
import skygear from 'skygear';
import ChartActions from '../Action/ChartActions.js';
import VotingFormActions from '../Action/VotingFormActions.js';

class VotingFormStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      food: '',
    };
    this.listenables = VotingFormActions;
  }

  onFoodEdited(event) {
    this.setState({
      food: event.target.value,
    });
  }

  onVote(event) {
    let choice = this.state.food;
    const voter = new skygear.Reference(
      "user/" + skygear.currentUser.id
    );

    const Vote = skygear.Record.extend('vote');
    const vote = new Vote({
      choice: choice,
      voter: voter,
    });
    console.log(vote);

    skygear.publicDB.save(vote)
    .then((record) => {
      console.log(record);
      ChartActions.updateChart();
    }, (error) => {
      console.error(error);
    });
  }
}

export default VotingFormStore;
