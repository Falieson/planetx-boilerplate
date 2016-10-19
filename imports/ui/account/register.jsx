import React from 'react';

import Paper from 'material-ui/Paper';
import { tabStyles } from './helpers';

export default function accountRegister() {
  return (
    <Paper zDepth={1}>
      <h2 style={tabStyles.headline}>Register</h2>
      <p>
        This is the registeration tab
      </p>
    </Paper>
  );
}
