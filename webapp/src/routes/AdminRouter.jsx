import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import UserPanel from '../pages/UserPanel';
import DocApi from '../pages/DocApi';

export default class AdminRouter extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/admin' component={Dashboard} />
        <Route  exact path='/admin/users' component={UserPanel} />
        <Route   path='/admin/api' component={DocApi} />
    </Switch>
    )
  }
}