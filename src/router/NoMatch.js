import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Redirect to="/dashboard" />
    );
  }
}

export default NoMatch;
