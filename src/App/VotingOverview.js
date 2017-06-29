import React from 'react';
import Reflux from 'reflux';
import PollingResultChart from './PollingResultChart';
import Toolbar from './Toolbar';
import VotingCardDeck from './VotingCardDeck';
import VotingForm from './VotingForm';
import ChartStore from './Store/ChartStore.js';

class VotingOverview extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = ChartStore;
  }

  render() {
    return (
      <div>
        <Toolbar />
        <PollingResultChart labels={this.state.labels} data={this.state.data} />
        <VotingCardDeck />
        <VotingForm />
      </div>
    );
  }
}

export default VotingOverview;
