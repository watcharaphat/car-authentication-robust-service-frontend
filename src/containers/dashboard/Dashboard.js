import { Component } from 'react';
import { connect } from 'react-redux';
import DashboardTemplate from './Template';
import crypto from 'crypto';

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
    if (this.props.users) {
      console.log('*** render ***');
      console.log(this.props.users);
      const sign = crypto.createSign('sha256');
      sign.update('some data to sign');

      const privateKey = this.props.users['user1'].privateKey;
      console.log('privateKey:', privateKey);
    }

    return DashboardTemplate.call(this);
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Dashboard);
