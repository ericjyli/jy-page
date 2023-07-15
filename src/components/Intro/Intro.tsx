import React from "react";
import './Intro.css'
import Alpaca from "../Alpaca/Alpaca";

const Intro = () => {
    return(
        <div className="Intro">
            <h1 className="intro-name">
                <pre className="intro-text">
                    Junyu (Eric) Li           李骏宇
                </pre>
            </h1>
            <div className="alpaca-intro">
                <div className="alpaca-pic">
                    <Alpaca />
                </div>
                <div className="alpaca-text">
                Hi! My name is Junyu (pronounced as jyun-yu Li). You can also call me Eric.
                Besides, my friends called me "alpaca" starting from my primary school, and the nickname has been with me ever since.<br></br> 
                I am currently a third-year student majored in Electrical and Computer Engineering at University of Toronto.
  
                </div>
            </div>

        </div>
    )
}

export default Intro;