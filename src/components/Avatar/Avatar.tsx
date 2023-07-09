import React from 'react'
import AvatarImage from './Avatar.jpg'
import './Avatar.css'

const Avatar = () => {
    return (
        <div className="avatar-container">
            <a href="/" className="avatar-link">
                <img className="avatar-img" src={AvatarImage} alt="Avatar"/>
            </a>
            <a href="/" className="avatar-name-container">
                <span className="avatar-name">Junyu Li</span>
            </a>
            
        </div>
    )
}

export default Avatar;