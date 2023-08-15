import React from "react";
import './WelcomeText.css'
import Photo from '../MyPhoto/MyPhoto'
import { Typography, Space } from 'antd';
const { Text, Title } = Typography;


const TitleStyle = {
    fontFamily: 'Helvetica',
    fontSize: "42px"
    
}

const TitleMediaQuery = {
    '@media (max-width: 420px)': {
        
        fontSize: "32px"
    }
}



const WelcomePage = () => {
    return(
        <div className="welcome-page">
            <Space 
                className="welcome-text"
                direction="vertical"
            >
                <Title
                    level={1}
                    style={
                        { ...TitleStyle, ...TitleMediaQuery}
                    }
                >
                    Hi, I'm Junyu Li
                </Title>                

                <Text 
                    strong
                    style={
                        {
                            fontFamily: 'Andika',
                            fontSize: "32px"
                        }
                    }
                >
                    Feel free to look around and get to know more <a href="/about">about me</a>. You may also want to check out my <a href="/resume">resume</a>.
                </Text>

            </Space>

            <div className="Portrait-right">
                <Photo />
            </div>
        </div>
    )
}

export default WelcomePage;