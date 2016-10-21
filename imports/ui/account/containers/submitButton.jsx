import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import RaisedButton from 'material-ui/RaisedButton';

// Actions
import { submitNewAccount, submitAccountLogin } from '../../actions/account';

@autobind
class submitButton extends Component {
  onSubmitRegistration() {
    const { dispatch, account } = this.props;

    dispatch(submitNewAccount(account));
  }

  onSubmitLogin() {
    const { dispatch, account } = this.props;

    dispatch(submitAccountLogin(account));
  }

  render() {
    const { isLogin, accountValid } = this.props;
    const { usernameValid, emailValid, passwordValid } = accountValid;

    const validFields = isLogin ? usernameValid && passwordValid : usernameValid && emailValid && passwordValid;

    const title = isLogin ? 'Login' : 'Register Now!';

    return (
      <RaisedButton
        label={title}
        disabled={!validFields}
        onTouchTap={isLogin ? this.onSubmitLogin : this.onSubmitRegistration}
        primary
        fullWidth
      />
    );
  }
}

submitButton.propTypes = {
  dispatch: PropTypes.func,
  isLogin: PropTypes.bool,
};

function mapStoreToProps(store) {
  const { Account } = store;

  const {
    username, email, password,
    usernameValid, emailValid, passwordValid,
  } = Account || {
    username: '', email: '', password: '',
    usernameValid: false, emailValid: false, passwordValid: false,
  };

  const account = { username, email, password };
  const accountValid = { usernameValid, emailValid, passwordValid };

  return { account, accountValid };
}

export default connect(mapStoreToProps)(submitButton);
