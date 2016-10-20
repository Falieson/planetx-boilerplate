import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

// Components
import TextField from 'material-ui/TextField';
import { slow, inputStyles, regexes } from '../helpers';

// Actions
import { updateAccountEmail, updateAccountEmailInvalid } from '../../actions/account';

@autobind
class accountEmail extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: true,
      error: '',
    };
  }
  handleChangedEmail(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    const text = event.target.value;

    let isValid = true;
    let error = '';

    const regex = regexes.email;
    isValid = regex.test(text);

    if(isValid) {
      dispatch(slow(updateAccountEmail(text)));

      error = '';
    } else {
      dispatch(slow(updateAccountEmailInvalid(text)));

      error = regexes.emailError;
    }

    // Update the component state
    this.setState({ text, isValid, error });
  }
  render() {
    const styles = inputStyles.textField;
    const { error } = this.state;

    const title = 'Email Address';

    return (
      <TextField
        style={styles.field}
        hintText={title}
        floatingLabelText={`${title} For Login/Recovery`}
        errorText={error}
        floatingLabelStyle={styles.floatingLabel}
        floatingLabelFocusStyle={styles.floatingLabelFocus}
        underlineFocusStyle={styles.underlineStyle}
        errorStyle={styles.errorLabel}
        onChange={this.handleChangedEmail}
      />
    );
  }
}

accountEmail.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(accountEmail);
