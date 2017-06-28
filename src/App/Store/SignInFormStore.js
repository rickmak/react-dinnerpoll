import Reflux from 'reflux';
import skygear from 'skygear';
import AuthenticationActions from '../Action/AuthenticationActions';
import SignInFormActions from '../Action/SignInFormActions';

class SignInFormStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: {
        invalidUsernameOrPassword: false,
        others: false,
      }
    };
    this.listenables = SignInFormActions;
  }

  onUsernameEdited(event) {
    this.setState({
      username: event.target.value,
      error: {
        invalidUsernameOrPassword: false,
        others: false,
      }
    });
  }

  onPasswordEdited(event) {
    this.setState({
      password: event.target.value,
      error: {
        invalidUsernameOrPassword: false,
        others: false,
      }
    });
  }

  onSignIn(event) {
    event.preventDefault();
    skygear.loginWithUsername(this.state.username, this.state.password).then((user) => {
      console.log(user); // user object
      AuthenticationActions.signInSuccess(user);
      this.setState({
        username: '',
        password: '',
        error: {
          invalidUsernameOrPassword: false,
          others: false,
        }
      });
    }, (error) => {
      console.error(error);    
      if (error.error.code === skygear.ErrorCodes.InvalidCredentials ||
          error.error.code === skygear.ErrorCodes.ResourceNotFound ) {
        // incorrect username or password
        let error = this.state.error;
        error.invalidUsernameOrPassword = true;
        this.setState({error: error});
      } else {
        // other kinds of error
        let error = this.state.error;
        error.others = true;
        this.setState({error: error});
      }
    })
  }
}

export default SignInFormStore;
