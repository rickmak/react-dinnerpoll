import Reflux from 'reflux';

const AuthenticationActions = Reflux.createActions([
  "signInSuccess",
  "signUpSuccess",
  "signOutSuccess",
]);

export default AuthenticationActions;
