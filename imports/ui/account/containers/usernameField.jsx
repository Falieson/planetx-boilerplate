import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

// Components
import TextField from 'material-ui/TextField';
import { slow, inputStyles, regexes } from '../helpers';

// Actions
import { updateAccountUsername, updateAccountUsernameInvalid } from '../../actions/account';

@autobind
class accountUsername extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: true,
      error: '',
    };
  }
  handleChangedUsername(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    const minLength = 8;
    const maxLength = 20;
    const text = event.target.value;

    let isValid = true;
    let error = '';

    const isEmail = text.indexOf('@') >= 0;
    const usernameLength = text.length >= minLength && text.length <= maxLength;

    if(isEmail || usernameLength) {
      const regex = isEmail ? regexes.email : regexes.username;
      isValid = regex.test(text);

      if(isValid) {
        // SUCCESS
        //
        dispatch(slow(updateAccountUsername(text)));

        error = '';
      } else {
        // FAIL
        dispatch(slow(updateAccountUsernameInvalid(text)));

        error = isEmail ? regexes.emailError : regexes.usernameError;
      }
    } else if(text.length === 0) {
      // FAIL
      isValid = false;
      dispatch(slow(updateAccountUsernameInvalid(text)));

      error = '';
    } else if(text.length < minLength) {
      // FAIL
      isValid = false;
      dispatch(slow(updateAccountUsernameInvalid(text)));

      error = `At least ${minLength} characters`;
    } else {
      // FAIL
      isValid = false;
      dispatch(slow(updateAccountUsernameInvalid(text)));

      const overMaxLength = text.length - maxLength;
      error = `${overMaxLength} over ${maxLength} characters`;
    }

    // Update the component state
    this.setState({ text, isValid, error });
  }
  render() {
    const styles = inputStyles.textField;
    const { error } = this.state;
    const { isLogin } = this.props;

    const title = isLogin ? 'Username or Email' : 'Username';


    return (
      <TextField
        style={styles.field}
        hintText={title}
        floatingLabelText={title}
        errorText={error}
        floatingLabelStyle={styles.floatingLabel}
        floatingLabelFocusStyle={styles.floatingLabelFocus}
        underlineFocusStyle={styles.underlineStyle}
        errorStyle={styles.errorLabel}
        onChange={this.handleChangedUsername}
      />
    );
  }
}

accountUsername.propTypes = {
  dispatch: PropTypes.func,
  isLogin: PropTypes.bool,
};

export default connect()(accountUsername);
