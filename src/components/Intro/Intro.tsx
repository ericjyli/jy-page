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
                        My name is Junyu (pronounced as jyun-yu). You can also call me Eric.
                        Besides, my friends called me "alpaca" starting from my primary school, and the nickname has been with me ever since.<br />
                        I am currently an undergrad student majored in Electrical and Computer Engineering at University of Toronto.
    
                    </div>
                </div>

                <Divider orientation="left" plain dashed className="about-me-divider">
                    about me
                </Divider>

                <div id="about-me">
                    I was borned in Shanghai, China, and I have spent the majority of my life there. If you plan to visit Shanghai, feel free to reach out to me for recommendations.<br />
                    Things I love about Shanghai:<br />
                    <ul className="shanghai-list">
                        <li>Shanghai Shenhua FC</li>
                        <li>Shanghainese dialect</li>
                        <li>Shanghai metro</li>
                        <li>Xujiahui</li>
                        <li>Kangjian Community Stadium</li>
                        <li>Huaihai Road</li>
                        <li>People</li>
                    </ul>

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
                            key: 'about-me',
                            href: '#about-me',
                            title: 'about me'
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