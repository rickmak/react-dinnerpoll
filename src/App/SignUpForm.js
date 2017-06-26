import React from 'react';
import Reflux from 'reflux';
import FormControl from './FormControl.js';
import FormGroup from './FormGroup.js';
import SignUpFormActions from './Action/SignUpFormActions.js';
import SignUpFormStore from './Store/SignUpFormStore.js';

class SignUpForm extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = SignUpFormStore;
  }

  render() {
    let usernameFormControl = (
      <FormControl 
        isError={ this.state.error.usernameExists }
        value={ this.state.username }
        onChange={ SignUpFormActions.usernameEdited }
        id="username"
        placeholder="Username"
        type="text"
        required="true"
      />
    );

    let passwordFormControl = (
      <FormControl 
        isError={ this.state.error.passwordsDontMatch }
        value={ this.state.password }
        onChange={ SignUpFormActions.passwordEdited }
        id="password"
        placeholder="Password"
        type="password"
        required="true"
        minLength="6"
      />
    );

    let passwordConfirmFormControl = (
      <FormControl 
        isError={ this.state.error.passwordsDontMatch }
        value={ this.state.passwordConfirm }
        onChange={ SignUpFormActions.passwordConfirmEdited }
        id="password-confirm"
        placeholder="Re-enter password"
        type="password"
        required="true"
        minLength="6"
      />
    );

    return (
      <form onSubmit={ SignUpFormActions.signUp }>
        <FormGroup formControl={ usernameFormControl } isError={ this.state.error.usernameExists } />
        <FormGroup formControl={ passwordFormControl } isError={ this.state.error.passwordsDontMatch } />
        <FormGroup formControl={ passwordConfirmFormControl } isError={ this.state.error.passwordsDontMatch } />
        <FormGroup feedback={ "Username exists" } isError={ this.state.error.usernameExists } />
        <FormGroup feedback={ "Two password do not match" } isError={ this.state.error.passwordsDontMatch } />
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
