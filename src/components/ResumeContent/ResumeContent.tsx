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
                        <div className="experience-bx">
                            <Title
                                level={5}
                                ellipsis
                            >
                                Baixing AI - Full Stack Engineer
                            </Title>
                            <Paragraph>
                                <Text>
                                    Baixing.AI, Shanghai, China<br />
                                    Main project: <Link href="https://www.navit.ai">Navit.ai</Link> <br />
                                    Navit is a platform for exploring various types of bots. It offers users easy access to these intriguing bots and provides developers with the convenience of integrating their API Bots into the platform.

                                </Text>

                                <ul>
                                    <li>
                                        Developed synchronous and asynchronous callback interfaces between the backend server of the website and the API bots server.
                                    </li>
                                    <li>
                                        Drafted documentation for developers to integrate their bots on the website with additional functionalities, such as streaming response.
                                    </li>
                                    <li>
                                        Applied prompt engineering integrated with external tools to build several API bots.
                                    </li>
                                </ul>

                            </Paragraph>
                        </div>

                        <div className="experience-map">
                            <Title
                                level={5}
                                ellipsis
                            >   
                                Map Application - Software Engineer
                            </Title>
                            <Paragraph>
                                <Text>
                                    University of Toronto, Toronto, Canada
                                </Text>
                                <ul>
                                    <li>
                                        Designed optimized data structures for quick loading and storage of data from OpenStreetMap database API.
                                    </li>
                                    <li>
                                        Developed a user-friendly map application interface using the EZGL library.
                                    </li>
                                    <li>
                                        Implemented Dijkstra's and A* algorithms for efficient path finding, generating path instructions with text-to-speech accessibility feature.
                                    </li>
                                    <li>
                                        Applied parallelization to optimize the solution of the Traveling Salesman Problem based on Dijkstra’s algorithm by using 2-opt, swapping, etc.
                                    </li>
                                </ul>
                                
                            </Paragraph>
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