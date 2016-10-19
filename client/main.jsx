// Meteor & React
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

// Router
import { renderRoutes } from '../imports/startup/client/';

// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

function appRoot() {
  return (
    <div className="app-container">
      {renderRoutes()}
    </div>
  );
}

Meteor.startup(() => {
  injectTapEventPlugin(); // Required for Material-UI

  render(
    appRoot(),
    document.getElementById('root')
  );
});
