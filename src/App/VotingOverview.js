import React from 'react';
import Reflux from 'reflux';
import PollingResultChart from './PollingResultChart';
import Toolbar from './Toolbar';
import VotingCardDeck from './VotingCardDeck';

class VotingOverview extends Reflux.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <PollingResultChart />
        <VotingCardDeck />
      </div>
    );
  }
}

export default VotingOverview;
