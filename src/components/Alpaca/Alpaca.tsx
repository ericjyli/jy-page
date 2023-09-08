import React from 'react'
import AlpacaPic from './Alpaca.jpg'
import { Image } from 'antd';


const Alpaca = () => {
    return <Image
        src={AlpacaPic} 
        alt="alpaca"
        width={300}
        
    >
    </Image>
}


export default Alpaca