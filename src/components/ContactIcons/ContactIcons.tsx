import React from "react";
import './ContactIcons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'


const ContactIcons = () => {

    return (
        <div className="contact-icons-container">
            <a className="github-icon" href="https://github.com/ericjyli">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="linkedin-icon" href="https://www.linkedin.com/in/junyu-li-1742421ba/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="instagram-icon" href="https://www.instagram.com/ericli0016/">
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a className="discord-icon" href="https://www.discordapp.com/users/885209465710837780">
                <FontAwesomeIcon icon={faDiscord} />
            </a>

            <a className="twitter-icon" href="https://twitter.com/JYL316">
                <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a className="email-icon" href="mailto:ericli.jy@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>

        </div>
    )

}

export default ContactIcons;