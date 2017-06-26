import Reflux from 'reflux';

const SignUpFormActions = Reflux.createActions([
  "usernameEdited",
  "passwordEdited",
  "passwordConfirmEdited",
  "signUp",
]);

export default SignUpFormActions;
