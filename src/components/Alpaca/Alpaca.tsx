import React from 'react'
import AlpacaPic from './Alpaca.jpeg'
import './Alpaca.css'


const Alpaca = () => {
    return <div>
        <img className="alpaca-photo" src={AlpacaPic} alt="alpaca"></img>
    </div>
}


export default Alpaca