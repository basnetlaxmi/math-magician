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
            <button type="button" className="button-column-1">
              AC
            </button>
            <button type="button" className="button-column-2">
              +/-
            </button>
            <button type="button" className="button-column-3">
              %
            </button>
            <button type="button" className="button-column-4">
              *
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1">
              7
            </button>
            <button type="button" className="button-column-2">
              8
            </button>
            <button type="button" className="button-column-3">
              9
            </button>
            <button type="button" className="button-column-4">
              x
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1">
              4
            </button>
            <button type="button" className="button-column-2">
              5
            </button>
            <button type="button" className="button-column-3">
              6
            </button>
            <button type="button" className="button-column-4">
              -
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1">
              1
            </button>
            <button type="button" className="button-column-2">
              2
            </button>
            <button type="button" className="button-column-3">
              3
            </button>
            <button type="button" className="button-column-4">
              +
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1">
              0
            </button>

            <button type="button" className="button-column-4">
              =
            </button>
          </div>

        </div>

      </div>
    );
  }
}
