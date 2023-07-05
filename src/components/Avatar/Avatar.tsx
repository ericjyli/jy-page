import React from 'react'
import AvatarImage from './Avatar.jpg'
import './Avatar.css'

const Avatar = () => {
    return (
        <div className="avatar-container">
            <img className="avatar-img" src={AvatarImage} alt="Avatar"/>
            <span className="avatar-name">Junyu Li</span>
        </div>
    )
}

export default Avatar;