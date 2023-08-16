import React from 'react'
import AlpacaPic from './Alpaca.jpg'
import './Alpaca.css'
import { Image } from 'antd';


const Alpaca = () => {
    return <Image
        src={AlpacaPic} alt="alpaca">
    </Image>
}


export default Alpaca