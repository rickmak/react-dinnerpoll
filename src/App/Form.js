import React from 'react';
import Reflux from 'reflux';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import FormActions from './Action/FormActions.js';
import FormStore from './Store/FormStore.js';

class Form extends Reflux.Component {
  constructor(props){
    super(props);
    this.store = FormStore;
  }

  render() {
    return (
      <div>
        { this.state.lookingForSignIn ? <SignInForm /> : <SignUpForm /> }
        <div className="row justify-content-center my-3">
          <div className="col-12 text-center">
            <a href="foo" onClick={ FormActions.switchForm }>{ this.state.lookingForSignIn ? "Sign Up?" : "Sign In?" }</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
