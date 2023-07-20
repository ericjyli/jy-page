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
                    <br />My Shanghai Beloved:<br />
                    <ul className="shanghai-list">
                        <li>Shanghai Shenhua FC</li>
                        <li>Shanghainese dialect</li>
                        <li>Metro</li>
                        <li>Xujiahui</li>
                        <li>Kangjian Community Stadium</li>
                        <li>Huaihai Road</li>
                    </ul>
                    Some facts:<br />
                    <ul className="facts-list">
                        <li>
                            The first game I remember that I played was 'Age of Empires' (cuz my dad that time was playing the game). He always liked to choose the Assyrians. 
                            I honestly did not understand anything about the game, literally just clicked the mouse randomly following the instructions.
                        </li>
                        <li>
                            I literally attended the same school for my primary school, middle school, and high school. I got to know quite a lot of friends there.
                            It is really nice to have friends not separated by time and space throughout the early years of my life.
                        </li>
                        <li>
                            Before I went to middle school, I spent most of my spare time practicing Go. My weekends that time were literally full. I was pretty keen on it, when I woke up at 6 just to play Go myself. I appreciate that little boy.
                        </li>
                        <li>
                            I got the first generation of iPad. The game I played the most that time was FIFA 11. That was the first time I got to know about football.
                            I always controlled FC Barcelona, and I started to like the team since then. 
                        </li>
                        <li>
                            Fun memory, David Villa was the ST of Barcelona in that version of FIFA, and I scored a lot of goals with him.
                            I also heard that Messi from Barcelona was the best player in the world. For some reason, I thought Messi was Villa.
                        </li>
                        <li>
                            I am a pretty persistent game player. The games I have been playing all lasted for years. Hearthstone, Dota 2, Fifa, PvZ. Yea these games all sound old now.
                        </li>
                        <li>
                            Starting from the age of 15, I started to keep a folder for all kinds of tickets I got. I feel good looking back to these tickets, recalling many of the memories.
                        </li>
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
                    affix
                    offsetTop={100}
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