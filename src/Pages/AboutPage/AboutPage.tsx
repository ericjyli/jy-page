import React from 'react'
import AppBar from '../../components/AppBar/AppBar'
import Intro from '../../components/About/About'
import './AboutPage.css'

const AboutPage = () => {
    return(
        <div className="AboutPage">
            <AppBar />
            <Intro />
        </div>

    )
}

export default AboutPage;