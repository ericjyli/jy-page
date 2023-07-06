import React from 'react'
import Photo from './Photo.jpg'

const MyPhoto = () => {
    return(
        <div className="Portrait">
            <img className="Portrait-img" src={Photo} alt="Portrait"/>
        </div>
    )
}

export default MyPhoto;