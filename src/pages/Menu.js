import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  <>
    <div>
      <h4>Math Magician</h4>
    </div>
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Quote">Quotes</Link>
    </div>

  </>;
};
export default Menu;
