import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

import { IState } from '../store';
import { IUser } from '../store/modules/userAuth/types';

const Routes: React.FC = () => {

  const userAuthenticated = useSelector<IState, IUser>((state) => state.userAuth.user);

  const publicRoute = (Component: React.FC) => (
    userAuthenticated.email
      ? () => <Redirect to="/home" />
      : Component
  );

  const privateRoute = (Component: React.FC) => (
    userAuthenticated.email
      ? Component
      : () => <Redirect to="/" />
  );

  return (
    <Switch>
      <Route
        path="/"
        exact
        component={publicRoute(SignIn)}
      />
      <Route
        path="/signup"
        component={publicRoute(SignUp)}
      />
      <Route
        path="/home"
        component={privateRoute(Home)}
      />
    </Switch>
  );
};

export default Routes;
