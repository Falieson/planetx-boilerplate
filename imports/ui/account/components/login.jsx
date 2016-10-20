import React from 'react';

// Layout
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

// Components
import Paper from 'material-ui/Paper';
import { tabStyles, inputStyles } from '../helpers';
import Username from '../containers/usernameField';
import Password from '../containers/passwordField';
import Submit from '../containers/submitButton';

export default function accountLogin() {
  return (
    <Paper zDepth={1}>
      <h2 style={tabStyles.headline}>Login</h2>
      <Row style={inputStyles.container}>
        <Col xs="12" md-offset="2" md="8">
          <Username isLogin />
          <Password />
          <Submit isLogin />
        </Col>
      </Row>
    </Paper>
  );
}
