/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './index.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
