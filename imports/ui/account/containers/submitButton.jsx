import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SubmitBallotButton extends Component {
  render() {
    const { isLogin } = this.props;
    const title = isLogin ? 'Login' : 'Register Now!';

    const diabled = false;
    return (
      <RaisedButton
        label={title}
        disabled={diabled}
        primary
        fullWidth
      />
    );
  }
}

SubmitBallotButton.propTypes = {
  isLogin: PropTypes.bool,
};
