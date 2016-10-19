import React from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './layouts/';

// App component - represents the whole app
export default function App(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Layout>
        {props.children}
      </Layout>
    </MuiThemeProvider>
  );
}
