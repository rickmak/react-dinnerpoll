import React from 'react';
import Reflux from 'reflux';
import PollingResultChart from './PollingResultChart';
import Toolbar from './Toolbar';

class VotingOverview extends Reflux.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <PollingResultChart />
      </div>
    );
  }
}

export default VotingOverview;
