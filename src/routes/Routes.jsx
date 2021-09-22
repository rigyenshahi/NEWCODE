import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Questions from '../pages/Question';

import RegistrationPage from '../pages/RegistrationPage';

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/find-your-swim-level" render={(props) => <Questions {...props} />} />
    </Switch>
  );
};

export default Routes;
