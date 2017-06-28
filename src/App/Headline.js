import React from 'react';
import Reflux from 'reflux';

class Headline extends Reflux.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-auto">
          <div className="media align-items-center">
            <img className="d-flex mr-3" src="img/pencils.svg" alt="Dinnerpoll logo" />
            <div className="media-body text-center">
              <h1 className="mt-0">What's for dinner?</h1>
              <p className="mb-0"><small className="text-muted">A simple polling demo using Skygear</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;
