import React from 'react';
import Reflux from 'reflux';
import VotingCardActions from './Action/VotingCardActions.js';
import VotingCardStore from './Store/VotingCardStore.js';

class VotingCard extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = VotingCardStore;
  }

  render() {
    return (
      <div className="card text-center">
        <div className="d-flex justify-content-center align-items-center p-3" style={{flex: '1 1 50%'}}>
          <img className="img-fluid" src={this.props.imgSrc} alt={this.props.imgAlt} style={{maxWidth: '90%'}} />
        </div>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <button type="button" name={this.props.food} className="btn btn-primary" onClick={VotingCardActions.vote}>Vote</button>
        </div>
      </div>
    );
  }
};

export default VotingCard;
