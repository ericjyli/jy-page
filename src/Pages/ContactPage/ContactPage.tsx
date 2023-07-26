import React from 'react'
import AppBar from '../../components/AppBar/AppBar';
import './ContactPage.css'
import ContactIcons from '../../components/ContactIcons/ContactIcons';

const ContactPage = () => {
    return(
        <div className="ContactPage">   
            <AppBar />
            <ContactIcons />
            
        </div>
        

    )
}

export default ContactPage;