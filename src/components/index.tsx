import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UseHookComponent from './hook/useContext';
import UseEffectComponent from './hook/useEffect';
import UseCallbackComponent from './hook/useCallback';
import Example from "./examples/test"
import NewRefComponent from './newAttr/ref';

ReactDOM.render (
  <Example />,
  document.getElementById('root')
)