import { Component } from 'react';
import { connect } from 'react-redux';
import ManageCarTemplate from './Template';

class ManageCar extends Component {
  render() {
    return ManageCarTemplate.call(this);
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    users: state.users,
  };
};

export default connect(mapStateToProps)(ManageCar);
