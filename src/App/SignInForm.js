import React from 'react';
import Reflux from 'reflux';
import FormControl from './FormControl.js';
import FormGroup from './FormGroup.js';
import SignInFormActions from './Action/SignInFormActions.js';
import SignInFormStore from './Store/SignInFormStore.js';

class SignInForm extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = SignInFormStore;
  }

  render() {
    let usernameFormControl = (
      <FormControl 
        isError={ this.state.error.invalidUsernameOrPassword }
        value={ this.state.username }
        onChange={ SignInFormActions.usernameEdited }
        id="username"
        placeholder="Username"
        type="text"
        required="true"
      />
    );

    let passwordFormControl = (
      <FormControl 
        isError={ this.state.error.invalidUsernameOrPassword }
        value={ this.state.password }
        onChange={ SignInFormActions.passwordEdited }
        id="password"
        placeholder="Password"
        type="password"
        required="true"
        minLength="6"
      />
    );

    return (
      <form onSubmit={ SignInFormActions.signIn }>
        <FormGroup formControl={ usernameFormControl } isError={ this.state.error.invalidUsernameOrPassword } />
        <FormGroup formControl={ passwordFormControl } isError={ this.state.error.invalidUsernameOrPassword } />
        <FormGroup feedback={ "Invalid username or password" } isError={ this.state.error.invalidUsernameOrPassword } />
        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
      </form>
    );
  }
}

export default SignInForm;
