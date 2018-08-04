import React, { Component } from 'react';
import RouterView from './router/RouterView';
import { Provider } from 'react-redux';
import store from './store/';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterView />
      </Provider>
    );
  }
}

export default App;
