import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const currentPath = location.pathname;


  return (
    <Menu 
      theme="dark" 
      mode="horizontal" 
      selectedKeys={[currentPath]} 
      className="navbar-list" 
      style={{ flex: "auto", minWidth: 0 }}
    >
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/experiences">
          <Link to="/experiences">Experiences</Link>
        </Menu.Item>
        <Menu.Item key="/resume">
          <Link to="/resume">Resume</Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
    </Menu>
  );
};

export default NavBar;
