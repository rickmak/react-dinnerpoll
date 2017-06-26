import React from 'react';
import Reflux from 'reflux';
import ToolbarActions from './Action/ToolbarActions.js';
import ToolbarStore from './Store/ToolbarStore.js';

class Toolbar extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = ToolbarStore;
  }
  
  render() {
    return (
      <div className="row justify-content-end my-3">
        <div className="col-auto">
          <button type="button" className="btn btn-primary" onClick={ToolbarActions.signOut}>Sign Out</button>
        </div>
      </div>
    );
  }
};

export default Toolbar;
