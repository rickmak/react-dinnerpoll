import Reflux from 'reflux';

const SignInFormActions = Reflux.createActions([
  "usernameEdited",
  "passwordEdited",
  "signIn",
]);

export default SignInFormActions;
