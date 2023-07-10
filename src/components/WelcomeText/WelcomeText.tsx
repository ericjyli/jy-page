import React from "react";
import './WelcomeText.css'
import Photo from '../MyPhoto/MyPhoto'

const WelcomePage = () => {
    return(
        <div className="welcome-page">
            <div className="welcome-text">
                <h2 className="welcome-name">
                    Hi, I'm Junyu Li
                </h2>                

                <div className="brief-intro">
                    Feel free to look around and get to know more <a href="/about">about me</a>. You may also want to check out my <a href="/resume">resume</a> and <a href="/experiences">my experiences</a>.
                </div>

            </div>

            <div className="Portrait-right">
                <Photo />

            </div>
        </div>
    )
}

export default WelcomePage;