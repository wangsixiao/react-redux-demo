import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import reducer from './reducer';

// const store = createStore(reducer)

export default class extends Component{
  render() {
    return (
      // <Provider store={store}>
        <App />
      // </Provider>
    )
  }
}