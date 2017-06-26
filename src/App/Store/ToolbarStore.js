import Reflux from 'reflux';
import skygear from 'skygear';
import AuthenticationActions from '../Action/AuthenticationActions.js';
import ToolbarActions from '../Action/ToolbarActions.js';

class ToolbarStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {};
    this.listenables = ToolbarActions;
  }

  onSignOut() {
    console.log('si');
    skygear.logout().then(() => {
      console.log('logout successfully');
      AuthenticationActions.signOutSuccess();
    }, (error) => {
      console.error(error);
    });
  }
}

export default ToolbarStore;
