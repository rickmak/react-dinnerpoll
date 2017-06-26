import React from 'react';
import Reflux from 'reflux';

class VotingCard extends Reflux.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="d-flex align-items-center justify-content-center p-3" style={{flex: '1 1 auto'}}>
          <img className="img-fluid" src={this.props.imgSrc} alt={this.props.imgAlt} style={{maxWidth: '90%'}} />
        </div>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <button type="button" className="btn btn-primary">Vote</button>
        </div>
      </div>
    );
  }
};

export default VotingCard;
