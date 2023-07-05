import React from 'react'

import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file


const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/experiences">Experiences</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

    </div>
  );
};

export default NavBar;