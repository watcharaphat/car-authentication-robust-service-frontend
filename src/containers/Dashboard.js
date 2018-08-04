import { Component } from 'react';
import DashboardTemplate from './Template';

class Dashboard extends Component {
  render() {
    return DashboardTemplate.call(this);
  }
}

export default Dashboard;
