import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUsersKey } from '../../actions/User';
import DashboardTemplate from './Template';
// import crypto from 'crypto';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCars: [],
    };
  }

  async componentDidMount() {
    axios.defaults.baseURL = 'http://travelerhub.xyz:3000/api';

    let users;
    try {
      const response = await axios.get('/key');
      users = response.data;
    } catch (err) {
      throw err;
    }

    console.log('users:', users);
    this.props.setUsersKey(users);

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
    console.log('users:', this.props.users);

    if (this.props.users) {
      // console.log('*** render ***');
      // const signer = crypto.createSign('sha256');
      // const data = 'bobo';
      // signer.update(data);
      // signer.end();

      // const privateKey = this.props.users['1'].privateKey;
      // const signature = signer.sign(privateKey);

      // console.log('signature:', signature);

      // const verifier = crypto.createVerify('sha256');
      // verifier.update(data);
      // verifier.end();

      // const publicKey = this.props.users['1'].publicKey;
      // const result = verifier.verify(publicKey, signature, 'hex');

      // console.log('result:', result);
    }

    return DashboardTemplate.call(this);
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    users: state.users,
  };
};

export default connect(mapStateToProps, { setUsersKey })(Dashboard);
