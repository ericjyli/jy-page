import React from "react";

import { GithubOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined, MailOutlined   } from '@ant-design/icons';

const ContactIcons = () => {

    return (
        <div className="contact-icons-container">
            <GithubOutlined 
                style = {{ fontSize: '16px'}}
            />
            <LinkedinOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
            <MailOutlined />
        </div>
    )

}

export default ContactIcons;