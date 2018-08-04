import { Component } from 'react';
import { connect } from 'react-redux';
import DashboardTemplate from './Template';
// import crypto from 'crypto';

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
    users: state.users,
  };
};

export default connect(mapStateToProps)(Dashboard);
