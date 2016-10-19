import React from 'react';

// Layout
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

// Components
import Header from './header';
import Footer from './footer';

export default function appLayout(props) {
  return (
    <Col md="12">
      <div className="header"><Row><Header /></Row></div>

      <div className="content"><Row>{props.children}</Row></div>

      <div className="footer"><Row><Footer /></Row></div>
    </Col>
  );
}
