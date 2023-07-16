import React from 'react'
import Photo from './Photo.jpg'
import './MyPhoto.css'
import { Image } from 'antd';


const MyPhoto = () => {
    return(
        <Image 
            className="Portrait-img"
            src={Photo} 
            alt="Portrait">
        </Image>
    )
}

export default MyPhoto;