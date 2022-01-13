/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <div className="screen">
          0
        </div>

        <div className="button-box">
          <div className="button-row" />
          <div className="button-row" />
          <div className="button-row" />
          <div className="button-row" />

        </div>

      </div>
    );
  }
}
