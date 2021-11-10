import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h1>Tufoins Bookstore</h1>
      <ul className="d-flex">
        <li>
          <Link to="/" exact> Books page </Link>
        </li>
        <li>
          <Link to="/categories"> Categories page </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
