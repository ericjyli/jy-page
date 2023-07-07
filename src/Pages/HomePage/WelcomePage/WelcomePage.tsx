import React from "react";
import './WelcomePage.css'
import Photo from '../../../components/MyPhoto/MyPhoto'

const WelcomePage = () => {
    return(
        <div className="welcome-page">
            <div className="welcome-text">
                <div className="welcoming">
                    WELCOME TO MY WORLD
                </div>
                <h2 className="welcome-name">
                    Hi, I'm Junyu Li
                </h2>
                <div className="detailed-intro">
                    I am currently a third-year student major in Computer Engineering.

                </div>
            </div>

            <div className="Portrait-right">
                <Photo />

            </div>
        </div>
    )
}

export default WelcomePage;