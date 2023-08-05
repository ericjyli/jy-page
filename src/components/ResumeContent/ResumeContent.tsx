import React from 'react';
import './ResumeContent.css';

import { Typography, Anchor} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;


const ResumeContent = () => {

    return(
        <div className="resume-container">
            <Title id="resume-title">Resume</Title>
            <div className="resume-main-container">
                <div className="resume-main-content-container">
                    
                    <div id="education">
                        <div className="resume-section-title">Education</div>
                        <div className="resume-section-content">

                        </div>
                    </div>
                </div>

                <div className="resume-anchor-container">
                    <Anchor
                        replace
                        affix
                        offsetTop={100}
                        
                        items={[
                            {
                                key: 'resume-education',
                                href: '#education',
                                title: 'Education'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumeContent;