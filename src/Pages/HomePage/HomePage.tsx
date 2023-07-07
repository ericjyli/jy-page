import React from 'react'
import './HomePage.css'

import AppBar from '../../components/AppBar/AppBar';
import WelcomePage from './WelcomePage/WelcomePage';


const HomePage = () => {
    return(
        <div className="HomePage">
            <AppBar />
            <WelcomePage />
        </div>
    )
}

export default HomePage;