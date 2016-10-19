import React from 'react';
import { Link } from 'react-router';

export default function layoutHeader() {
  const style = {
    margin: '5px 10px',
  };

  return (
    <div>
      <Link to="/" style={style}>Visit Home Page</Link>
      <Link to="/profile" style={style}>Visit Profile Page</Link>
    </div>
  );
}
