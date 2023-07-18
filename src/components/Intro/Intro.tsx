import React from "react";
import './Intro.css'
import Alpaca from "../Alpaca/Alpaca";
import { Anchor, Divider } from 'antd';

const Intro = () => {
    return(
        <div className="main-content">
            <div className="Intro">
                <h1 className="intro-name">
    
                    <div className="english-name">
                        Junyu (Eric) Li 
                    </div>
                    <div className="chinese-name">
                        李骏宇
                    </div>      
  
                </h1>
                <div id="intro">
                    <div className="alpaca-pic">
                        <Alpaca />
                    </div>
                    <div className="alpaca-text">
                        Hi! My name is Junyu (pronounced as jyun-yu Li). You can also call me Eric.
                        Besides, my friends called me "alpaca" starting from my primary school, and the nickname has been with me ever since.<br />
                        I am currently a third-year student majored in Electrical and Computer Engineering at University of Toronto.
    
                    </div>
                </div>

                <div id="about-me">


                </div>

                <Divider orientation="left" plain dashed className="hobby-divider">
                    hobbies
                </Divider>
                
                <div id="hobbies">

                    Things I have been enjoying for ages:<br />
                    <ul className="hobbies-list">
                        <li>Football (not the American one)</li>
                        <li>Music</li>
                        <li>Dota 2</li>
                        <li>Reading</li>
                        <li>Movies</li>
                    </ul>

                </div>


            </div>

            <div className="anchor-container">
                <Anchor
                    replace
                    className="anchor"
                    items={[
                        {
                            key: 'intro',
                            href: '#intro',
                            title: 'intro'
                        },
                        {
                            key: 'hobbies',
                            href: '#hobbies',
                            title: 'hobbies'
                        }
                    ]}
                
                
                />


            </div>
        </div>
    )
}

export default Intro;