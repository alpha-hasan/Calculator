import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './reset.css';
import './index.css';
import Calculator from './components/calculator/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);