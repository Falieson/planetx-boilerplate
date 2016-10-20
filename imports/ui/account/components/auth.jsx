import React from 'react';

// Layout
// import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

// Components
import { Tabs, Tab } from 'material-ui/Tabs';
import Login from './login';
import Register from './register';

export default function accountAuth() {
  const style = {
    marginTop: 10,
  };

  return (
    <Col style={style} xs="12" md-offset="3" md="6">
      <Tabs initialSelectedIndex={1}>
        <Tab label="Login" >
          <Login />
        </Tab>
        <Tab label="Register" >
          <Register />
        </Tab>
      </Tabs>
    </Col>
  );
}
