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
                        <Title className="education-section-title"
                            level={3}
                            ellipsis
                        >
                            Education
                        </Title>
                        <div className="education-section-content">
                            <Paragraph>
                                B.A.Sc. Electrical and Computer Engineering + PEY
                            </Paragraph>
       
                            <Paragraph>
                                <Link href="https://www.engineering.utoronto.ca/">
                                University of Toronto
                                </Link>
                                , 2026 (expected)
                            </Paragraph>
                        </div>
                    </div>

                    <div id="experience">
                        <Title className="experience-section-title"
                                level={3}
                                ellipsis
                            >
                                Experiences
                        </Title>

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
                            },
                            {
                                key: 'resume-experience',
                                href: '#experience',
                                title: 'Experiences'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumeContent;