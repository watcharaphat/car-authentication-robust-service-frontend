import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserId } from '../../actions/User';
import NavbarTemplate from './Template';
import './Navbar.css';

class Navbar extends Component {
  state = {
    dropDownShow: false,
  }

  onClickDropdown() {
    this.setState({dropDownShow: !this.state.dropDownShow});
  }

  render() {
    this.onClickDropdown = this.onClickDropdown.bind(this);
    return (
      <NavbarTemplate
        onClickDropdown={this.onClickDropdown}
        setUserId={this.props.setUserId}
        dropDownShow={this.state.dropDownShow} />
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { setUserId })(Navbar);
