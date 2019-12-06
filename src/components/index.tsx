import React, { Component } from 'react';
import UseHookComponent from './hook/useContext';
import UseEffectComponent from './hook/useEffect';

import NewRefComponent from './newAttr/ref';

export default class App extends Component{
 
  render() {
    return (
      <div className="container">
      <NewRefComponent />
      </div>
    )
  }
}