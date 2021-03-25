import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

const Routes: React.FC = () => {
  const { user } = useSelector((state: RootStateOrAny) => state)

  const publicRoute = (Component: React.FC) =>
    user.email ? () => <Redirect to="/home" /> : Component

  const privateRoute = (Component: React.FC) =>
    user.email ? Component : () => <Redirect to="/" />

  return (
    <Switch>
      <Route path="/" exact component={publicRoute(SignIn)} />
      <Route path="/signup" component={publicRoute(SignUp)} />
      <Route path="/home" component={privateRoute(Home)} />
    </Switch>
  )
}

export default Routes
