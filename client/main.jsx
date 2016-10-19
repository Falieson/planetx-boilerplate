// Meteor & React
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import Store from '../imports/ui/store/store.js';

// Router
import { renderRoutes } from '../imports/startup/client/';

// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

function appRoot() {
  return (
    <div className="app-container">
      <Provider store={Store()}>
        {renderRoutes()}
      </Provider>
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
