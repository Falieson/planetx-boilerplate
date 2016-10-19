// Meteor & React
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/';

function appRoot() {
  return (
    <div className="app-container">
      {renderRoutes()}
    </div>
  );
}

Meteor.startup(() => {
  render(
    appRoot(),
    document.getElementById('root')
  );
});
