import React from 'react'

import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './NavBar.css'; 


const NavBar = () => {
  return (
    <div className="navbar-container">

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="navbar-list">
        <Menu.Item key="1"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">Experiences</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/resume">Resume</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
      </Menu>

    </div>
  );
};

export default NavBar;