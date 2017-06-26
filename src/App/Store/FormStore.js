import Reflux from 'reflux';
import FormActions from '../Action/FormActions.js';

class FormStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      lookingForSignIn: true,
    };
    this.listenables = FormActions;
  }

  onSwitchForm(event) {
    event.preventDefault();
    this.setState({lookingForSignIn: !this.state.lookingForSignIn});
  }

  onRequireSignInForm() {
    this.setState({lookingForSignIn: true});
  }
}

export default FormStore;
