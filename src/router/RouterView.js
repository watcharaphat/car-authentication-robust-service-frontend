import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../containers/Dashboard';
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
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default RouterView;