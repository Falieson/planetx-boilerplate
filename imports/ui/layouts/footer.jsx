import React from 'react';

import Paper from 'material-ui/Paper';

export default function layoutFooter() {
  const style = {
    margin: '0 0',
  };
  return (
    <Paper style={style} zDepth={1}>
      <h4 style={style}>A footer at the bottom of the page</h4>
    </Paper>
  );
}
