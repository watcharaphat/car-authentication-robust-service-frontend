import React, { Component } from 'react';
import RouterView from './router/RouterView';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterView />
      </div>
    );
  }
}

export default App;
