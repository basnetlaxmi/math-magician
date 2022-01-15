/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, NewState] = useState({});

  const handleClick = (e) => {
    NewState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  return (
    <div className="calc-container">
      <div className="screen">
        {next || total || 0 }
      </div>
      <div className="button-box">
        <div className="button-row">
          <button type="button" className="button-column" onClick={handleClick}>
            AC
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            +/-
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            %
          </button>
          <button type="button" className="button-column orange" onClick={handleClick}>
            ÷
          </button>
        </div>
        <div className="button-row">
          <button type="button" className="button-column" onClick={handleClick}>
            7
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            8
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            9
          </button>
          <button type="button" className="button-column orange" onClick={handleClick}>
            x
          </button>
        </div>
        <div className="button-row">
          <button type="button" className="button-column" onClick={handleClick}>
            4
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            5
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            6
          </button>
          <button type="button" className="button-column orange" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="button-row">
          <button type="button" className="button-column" onClick={handleClick}>
            1
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            2
          </button>
          <button type="button" className="button-column" onClick={handleClick}>
            3
          </button>
          <button type="button" className="button-column orange" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="button-row">
          <button type="button" className="button-column-1" onClick={handleClick}>
            0
          </button>

          <button type="button" className="button-column orange" onClick={handleClick}>
            =
          </button>
        </div>

      </div>

    </div>
  );
};
export default Calculator;
