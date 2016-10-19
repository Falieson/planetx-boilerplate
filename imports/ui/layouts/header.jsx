import React from 'react';

// Layout
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

// Components
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

export default function layoutHeader() {
  const styles = {
    links: {
      margin: '5px 10px',
    },
    container: {
      textAlign: 'center',
      margin: '0 0',
      padding: '10px 10px',
    },
  };

  return (
    <Paper style={styles.container} zDepth={1}>
      <Row>
        <Col xs="6" md="3" md-offset="6">
          <Link to="/" style={styles.links}>Visit Home Page</Link>
        </Col>
        <Col xs="6" md="3">
          <Link to="/profile" style={styles.links}>Visit Profile Page</Link>
        </Col>
      </Row>
    </Paper>
  );
}
