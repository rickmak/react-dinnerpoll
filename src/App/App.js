import React from 'react';
import Reflux from 'reflux';
import Headline from './Headline';
import Content from './Content';

class App extends Reflux.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
        <div style={{width: '100%'}}>
          <div className="container-fluid">
            <Headline />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
