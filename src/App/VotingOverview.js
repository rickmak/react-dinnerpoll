import React from 'react';
import Reflux from 'reflux';
import PollingResultChart from './PollingResultChart';
import Toolbar from './Toolbar';
import VotingCardDeck from './VotingCardDeck';
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
        <PollingResultChart data={this.state.data} />
        <VotingCardDeck />
      </div>
    );
  }
}

export default VotingOverview;
