import React from 'react'

import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file


const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experiences">Experiences</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

    </div>
  );
};

export default NavBar;