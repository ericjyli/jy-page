import React from "react";
import './WelcomePage.css'
import Portrait from '../../../components/MyPhoto/MyPhoto'

const WelcomePage = () => {
    return(
        <div>
            <h2 className="welcome-page">
                <div className="welcoming">
                    WELCOME TO MY PAGE
                </div>
                <div className="welcome-name">
                    Hi, I'm Junyu Li
                </div>
                <div className="detailed-intro">
                    I am currently a third-year student major in Computer Engineering.

                </div>
            </h2>

            <div className="Portrait-right">
                <Portrait />

            </div>
        </div>
    )
}

export default WelcomePage;