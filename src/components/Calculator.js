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
          <div className="button-row">
            <button type="button" className="button-column">
              AC
            </button>
            <button type="button" className="button-column">
              +/-
            </button>
            <button type="button" className="button-column">
              %
            </button>
            <button type="button" className="button-column orange">
              *
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column">
              7
            </button>
            <button type="button" className="button-column">
              8
            </button>
            <button type="button" className="button-column">
              9
            </button>
            <button type="button" className="button-column orange">
              x
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column">
              4
            </button>
            <button type="button" className="button-column">
              5
            </button>
            <button type="button" className="button-column">
              6
            </button>
            <button type="button" className="button-column orange">
              -
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column">
              1
            </button>
            <button type="button" className="button-column">
              2
            </button>
            <button type="button" className="button-column">
              3
            </button>
            <button type="button" className="button-column orange">
              +
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1">
              0
            </button>

            <button type="button" className="button-column orange">
              =
            </button>
          </div>

        </div>

      </div>
    );
  }
}
