import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="navigation-bar">
      <h1 className="main-heading">Tufoins Bookstore</h1>
      <ul className="thelinks">
        <li className="ho">
          <Link to="/" exact> BOOKS </Link>
        </li>
        <li className="ca">
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
      <span className="oval">
        <FaUserCircle />
      </span>
    </nav>
  </>
);

export default Nav;
