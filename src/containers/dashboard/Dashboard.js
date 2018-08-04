import { Component } from 'react';
import DashboardTemplate from './Template';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCars: [],
    };
  }

  componentDidMount() {
    this.setState({
      myCars: [
        {
          name: 'Sweetie Car',
          model: 'Nissan Teana',
        },
      ],
    });
  }

  render() {
    return DashboardTemplate.call(this);
  }
}

export default Dashboard;
