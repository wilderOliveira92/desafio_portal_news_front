import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import News from '../pages/News';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/news" component={News} isPrivate />
  </Switch>
);

export default Router;
