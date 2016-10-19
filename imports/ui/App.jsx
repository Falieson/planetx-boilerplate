import React from 'react';

import Layout from './layouts/';

// App component - represents the whole app
export default function App(props) {
  return (
    <Layout>
      {props.children}
    </Layout>
  );
}
