import React from 'react'
import Avatar from '../Avatar/Avatar';
import NavBar from './NavBar/NavBar';
import './AppBar.css'


const AppBar = () => { 
    return(
        <div className='top-menu-container'>
            <div className='avatar-container'>
                <Avatar />
            </div>

            <div className='navbar-container'>
                <NavBar />
            </div>

        </div>
    )
}

export default AppBar;