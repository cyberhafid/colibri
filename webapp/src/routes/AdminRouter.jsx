import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import UserPanel from '../pages/UserPanel';
import DocApi from '../pages/DocApi';
import Calibration from '../pages/CalibrationPanel';
import BiasPanel from '../pages/BiasPanel';
import DevicePanel from '../pages/DevicePanel';
import ObservationPanel from '../pages/ObservationPanel';
import StrategiePanel from '../pages/StrategiePanel';
import FitsPanel from '../pages/FitsPanel';
import TestPanel from '../pages/TestPanel';
import ProduitPanel from '../pages/ProduitPanel';

export default class AdminRouter extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/admin' component={Dashboard} />
        <Route  exact path='/admin/users' component={UserPanel} />
        <Route  exact path='/admin/calibration' component={Calibration} />
        <Route  exact path='/admin/graphique' component={Dashboard} />
        <Route  exact path='/admin/masterbias' component={BiasPanel} />
        <Route  exact path='/admin/device' component={DevicePanel} />
        <Route  exact path='/admin/observation' component={ObservationPanel} />
        <Route  exact path='/admin/strategie' component={StrategiePanel} />
        <Route  exact path='/admin/fits' component={FitsPanel} />
        <Route  exact path='/admin/test' component={TestPanel} />
        <Route  exact path='/admin/fireflies' component={ProduitPanel} />

        <Route   path='/admin/api' component={DocApi} />
    </Switch>
    )
  }
}