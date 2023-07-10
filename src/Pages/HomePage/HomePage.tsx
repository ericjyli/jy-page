import React from 'react'
import './HomePage.css'

import AppBar from '../../components/AppBar/AppBar';
import WelcomePage from '../../components/WelcomeText/WelcomeText';


const HomePage = () => {
    return(
        <div className="HomePage">
            <AppBar />
            <WelcomePage />
        </div>
    )
}

export default HomePage;