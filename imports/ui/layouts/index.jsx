import React from 'react';

import Header from './header';
import Footer from './footer';

export default function standardLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
