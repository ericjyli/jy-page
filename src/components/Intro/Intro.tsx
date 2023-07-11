import React from "react";
import './Intro.css'

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

                </div>
                <div className="alpaca-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

        </div>
    )
}

export default Intro;