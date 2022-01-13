import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Calculator from './components/Calculator';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root'),
);
