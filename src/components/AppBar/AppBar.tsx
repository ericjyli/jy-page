import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Avatar from '../Avatar/Avatar';
import NavBar from './NavBar/NavBar';
import './AppBar.css';



const { Header } = Layout;

const AppBar = () => {
  return (
    <Header className="header">
      <div className="avatar-container">
        <Avatar />
        <NavBar />
      </div>

    </Header>
  );
};

export default AppBar;