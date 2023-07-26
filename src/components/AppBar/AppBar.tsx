import React from 'react';
import { Layout} from 'antd';
import Avatar from '../Avatar/Avatar';
import NavBar from './NavBar/NavBar';
import './AppBar.css';



const { Header } = Layout;

const AppBar = () => {
  return (
    <Header 
      className="header" 
    >
      <Avatar />
      <NavBar />
    </Header>
  );
};

export default AppBar;