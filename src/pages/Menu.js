import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <header>
      <nav>
        <div className="navbar">
          <h1>Math Magicians</h1>
          <ul className="navbar-items">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  activeClassName="current"
                  className="nav-link"
                  exact
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Menu = () => {
//   return (
//   <>
//     <div>
//       <h4>Math Magician</h4>
//     </div>
//     <div>
//       <Link to="/Home">Home</Link>
//       <Link to="/Calculator">Calculator</Link>
//       <Link to="/Quote">Quotes</Link>
//     </div>

//   </>
//   );
//   };
// export default Menu;
