import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import skygear from 'skygear';

skygear.config({
  'endPoint': 'https://dinnerpollpoly.staging.skygeario.com/',
  'apiKey': '129b9168991f433ea5f6cfa87d946714',
}).then(() => {
  console.log('skygear container is now ready for making API calls.');
}, (error) => {
  console.error(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
