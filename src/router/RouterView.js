import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../containers/dashboard/Dashboard';
import ManageCar from '../containers/manage-car/ManageCar';
import NoMatch from './NoMatch';

class RouterView extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="app-body">
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/manage-car' component={ManageCar} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default RouterView;