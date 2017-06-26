import Reflux from 'reflux';
import skygear from 'skygear';
import FormActions from '../Action/FormActions';
import AuthenticationActions from '../Action/AuthenticationActions';

class AuthenticationStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.listenables = AuthenticationActions;
  }

  onSignInSuccess(user) {
    this.setState({
      user: user,
    });
  }

  onSignUpSuccess(user) {
    this.setState({
      user: user,
    });
  }

  onSignOutSuccess() {
    this.setState({
      user: null,
    });
  }
}

export default AuthenticationStore;
