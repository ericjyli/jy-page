import React from 'react'
import AvatarImage from './Avatar.jpg'
import { Avatar } from 'antd';
import './Avatar.css'

const AvatarPic = () => {
    return (
        <div className="avatar-container">
            <a href="/" className="avatar-link">
                <Avatar className="avatar-img" 
                src={AvatarImage} 
                size={80}
                alt="Avatar"
                />
            </a>
            <a href="/" className="avatar-name-container">
                <span className="avatar-name">Junyu Li</span>
            </a>
            
        </div>
    )
}

export default AvatarPic;