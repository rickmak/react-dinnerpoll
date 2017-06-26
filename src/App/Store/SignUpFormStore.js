import Reflux from 'reflux';
import skygear from 'skygear';
import AuthenticationActions from '../Action/AuthenticationActions';
import SignUpFormActions from '../Action/SignUpFormActions';

class SignUpFormStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      error: {
        passwordsDontMatch: false,
        usernameExists: false,
        others: false,
      }
    };
    this.listenables = SignUpFormActions;
  }

  onUsernameEdited(event) {
    this.setState({
      username: event.target.value,
      error: {
        passwordsDontMatch: this.state.error.passwordsDontMatch,
        usernameExists: false,
        others: false,
      }
    });
  }

  onPasswordEdited(event) {
    this.setState({
      password: event.target.value,
      error: {
        passwordsDontMatch: false,
        usernameExists: this.state.error.usernameExists,
        others: false,
      }
    });
  }

  onPasswordConfirmEdited(event) {
    this.setState({
      passwordConfirm: event.target.value,
      error: {
        passwordsDontMatch: false,
        usernameExists: this.state.error.usernameExists,
        others: false,
      }
    });
  }

  onSignUp(event) {
    event.preventDefault();
    if(this.state.password === this.state.passwordConfirm) {
      skygear.signupWithUsername(this.state.username, this.state.password).then((user) => {
        console.log(user); // user object
        AuthenticationActions.signUpSuccess(user);
        this.setState({
          username: '',
          password: '',
          passwordConfirm: '',
          error: {
            passwordsDontMatch: false,
            usernameExists: false,
            others: false,
          }
        });
      }, (error) => {
        console.error(error);
        if (error.error.code === skygear.ErrorCodes.Duplicated) {
          // the username has already existed
          let error = this.state.error;
          error.usernameExists = true;
          this.setState({error: error});
        } else {
          // other kinds of error
          let error = this.state.error;
          error.others = true;
          this.setState({error: error});
        }
      });
    } else {
      let error = this.state.error;
      error.passwordsDontMatch = true;
      this.setState({error: error});
    }
  }
}

export default SignUpFormStore;
