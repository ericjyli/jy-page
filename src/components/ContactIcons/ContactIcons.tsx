import React from "react";
import './ContactIcons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'


const ContactIcons = () => {

    return (
        <div className="contact-icons-container">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faEnvelope} />

        </div>
    )

}

export default ContactIcons;