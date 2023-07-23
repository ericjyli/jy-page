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
                size={{ xs: 64, sm: 80, md: 80, lg: 80, xl: 80, xxl: 80 }} 
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