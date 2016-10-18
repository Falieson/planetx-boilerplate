// Meteor & React
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App';

function appRoot() {
  return (
    <div className="app-container">
      <App />
    </div>
  );
}

Meteor.startup(() => {
  render(
    appRoot(),
    document.getElementById('root')
  );
});
