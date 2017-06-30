import React from 'react';
import Reflux from 'reflux';
import VotingFormActions from './Action/VotingFormActions.js';
import VotingFormStore from './Store/VotingFormStore.js';

class VotingForm extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = VotingFormStore;
  }

  render() {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-6">
          <div className="card text-right">
            <div className="card-block">
              <div className="form-group row">
                <label htmlFor="new-idea" className="col-3 col-form-label">New idea?</label>
                <div className="col-9">
                  <input className="form-control" type="text" value={this.state.food} id="new-idea" onChange={VotingFormActions.foodEdited} />
                </div>
              </div>
              <button type="button" className="btn btn-primary" onClick={VotingFormActions.vote}>Vote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VotingForm;
