import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../../ui/App';
import accountAuth from '../../ui/account/components/auth';
import accountProfile from '../../ui/account/components/profile';

export default function renderRoutes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={accountAuth} />
        <Route path="profile" component={accountProfile} />
      </Route>
    </Router>
  );
}
