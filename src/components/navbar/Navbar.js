import { Component } from 'react';
import { connect } from 'react-redux';
import { setUserId } from '../../actions/User';
import NavbarTemplate from './Template';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return NavbarTemplate.call(this);
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { setUserId })(Navbar);
