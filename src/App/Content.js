import React from 'react';
import Reflux from 'reflux';
import Form from './Form';
import VotingOverview from './VotingOverview';
import AuthenticationStore from './Store/AuthenticationStore.js';

class Content extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = AuthenticationStore;
  }

  render() {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-10 col-md-6 col-lg-3">
          {this.state.user? <VotingOverview />:<Form />}
        </div>
      </div>
    );
  }
}

export default Content;