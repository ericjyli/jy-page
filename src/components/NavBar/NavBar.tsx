import React from 'react'

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
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
          <a href="/contact">Contact</a>
        </li>
      </ul>

    </div>
  );
};

export default NavBar;