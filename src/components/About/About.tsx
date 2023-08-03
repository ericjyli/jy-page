import React from "react";
import './About.css'
import Alpaca from "../Alpaca/Alpaca";
import { Anchor, Divider, Image, List, Typography } from 'antd';

import final from "../pictures/final.png"
import JayChou from "../pictures/JayChou.png"
import matcha from "../pictures/matcha.png"
import mayday from "../pictures/mayday.png"
import shenhua from "../pictures/shenhua.png"
import SIFF from "../pictures/SIFF.png"
import ti9 from "../pictures/ti9.png"


const about_me_data = [
    "The first game I remember that I played was 'Age of Empires' (cuz my dad that time was playing the game). He always liked to choose the Assyrians. I honestly did not understand anything about the game, literally just clicked the mouse randomly following the instructions.",
    "I literally attended the same school for my primary school, middle school, and high school. I got to know quite a lot of friends there. It is really nice to have friends not separated by time and space throughout the early years of my life.",
    "Before I went to middle school, I spent most of my spare time practicing Go. My weekends that time were literally full. I was pretty keen on it, when I woke up at 6 just to play Go myself. I appreciate that little boy.",
    "I got the first generation of iPad. The game I played the most that time was FIFA 11. That was the first time I got to know about football. I always controlled FC Barcelona, and I started to like the team since then.",
    "Fun memory. David Villa was the ST of Barcelona in that version of FIFA, and I scored a lot of goals with him. I also heard that Messi from Barcelona was the best player in the world. For some reason, I thought Messi was Villa.",
    "I am a pretty persistent game player. The games I have been playing all lasted for years. Hearthstone, Dota 2, Fifa, PvZ. Yea these games all sound old now.",
    "Starting from the age of 15, I started to keep a folder for all kinds of tickets I've got. It feels good to look back to these tickets, recalling many of the memories. I would be happy to share this folder."
]

const About = () => {
    return(
        <div className="main-content">
            <div className="Intro">
                <div className="intro-wrapper">
                    <div id="intro">
                        <h1 className="intro-name">
            
                            <div className="english-name">
                                Junyu (Eric) Li 
                            </div>
                            <div className="chinese-name">
                                李骏宇
                            </div>      
        
                        </h1>

                        <div id="intro-text">
                            <div className="alpaca-pic">
                                <Alpaca />
                            </div>
                            <div className="alpaca-text">
                                My name is Junyu (pronounced as jyun-yu). You can also call me Eric.
                                Besides, my friends called me "alpaca" starting from my primary school, and the nickname has been with me ever since.<br />
                                I am currently an undergrad student majored in Electrical and Computer Engineering at University of Toronto.
            
                            </div>
                        </div>

                    </div>


                    <div id="about-me">
                        <Divider orientation="left" plain dashed className="about-me-divider">
                            About me
                        </Divider>
                        
                        I was borned in Shanghai, China, and I have spent the majority of my life there. I started my undergrad study at University of Toronto in 2021, and I have been living in Toronto since then.
                        I am currently a third-year student majored in Electrical and Computer Engineering. <br />

                        <h3 className="some-history">
                            Some history:
                        </h3>

                        <List
                            dataSource={about_me_data}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                            size="large"
                            bordered
                        >


                        </List>
{/* 
                        <ul className="facts-list">

                        </ul> */}
                    </div>
                    

                    <div id="about-shanghai">
                        <Divider orientation="left" plain dashed >
                            About Shanghai:
                        </Divider>
                        If you plan to visit Shanghai, feel free to reach out to me for recommendations.<br />
                            <br />My Shanghai Beloved:<br />
                            <ul className="shanghai-list">
                                <li>Shanghai Shenhua FC</li>
                                <li>Shanghainese dialect</li>
                                <li>Metro</li>
                                <li>Xujiahui</li>
                                <li>Kangjian Community Stadium</li>
                                <li>Huaihai Road</li>
                                <li>Qiantan</li>
                            </ul>
                    </div>

                    

                    <div id="likes">
                        
                        <Divider orientation="left" plain dashed className="hobby-divider">
                            Things I like:
                        </Divider>

                        Here are some of the things popped up in my mind at the moment. 
                        <ul className="hobbies-list">
                            <li>Football (not the American one)</li>
                            <li>Music</li>
                            <li>Dota 2</li>
                            <li>Reading</li>
                            <li>Movies</li>
                            <li>Summer</li>
                            <li>Neat layouts</li>
                            <li>Matcha</li>
                            <li>Board games</li>
                        </ul>


                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            }}
                        >
                            <Image width={300} src={final} />
                            <Image width={300} src={JayChou} />
                            <Image width={300} src={matcha} />
                            <Image width={300} src={mayday} />
                            <Image width={300} src={shenhua} />
                            <Image width={300} src={SIFF} />
                            <Image width={300} src={ti9} />
                        </Image.PreviewGroup>
                    </div>
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
                            title: 'about'
                        },
                        {
                            key: 'likes',
                            href: '#likes',
                            title: 'likes'
                        }
                    ]}
                
                
                />


            </div>
        </div>
    )
}

export default About;