import React from 'react'
import AppBar from '../../components/AppBar/AppBar';
import './ContactPage.css'
import ContactIcons from '../../components/ContactIcons/ContactIcons';

const ContactPage = () => {
    return(
        <div className="ContactPage">   
            <AppBar />
            <div className="contact-container">
                <div className="contact-text">
                    <h1>Contact</h1>
                    <div id="contact-info">Feel free to reach out to me. You can find me at <br /> </div>
                    <a href="ericli.jy@outlook.com" id="email">ericli.jy@outlook.com</a>
                </div>
                <ContactIcons />
            </div>
            
        </div>
        

    )
}

export default ContactPage;