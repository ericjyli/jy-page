import React from 'react';
import './ResumeContent.css';

import { Typography, Anchor, Image} from 'antd';
import Skills from '../Skills/Skills';
import { skills, categories } from '../../data/skills';

const { Title, Paragraph, Text, Link} = Typography;


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
                                    <li>
                                        Containerized the API bots with Docker and deployed them on serverless Kubernetes cluster, using Jenkins for the CI and Argo for the CD to optimize the pipeline.
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

                        <div className="experience-sudoku">
                            <Title
                                level={5}
                                ellipsis
                            >
                                Sudoku Game - Software Developer
                            </Title>

                            <Paragraph>
                                <Text>
                                    University of Toronto, Toronto, Canada
                                </Text>
                                <ul>
                                    <li>
                                        Implemented backtrack algorithm to generate random solvable Sudoku games.
                                    </li>
                                    <li>
                                        Designed a user-friendly interface with clear frames and different colors, making it very easy for the user to read the board and fill in numbers to play the game.
                                    </li>
                                    <li>
                                    	Developed the functions in C language to save all past game data, kept track of the game orders even after the program is terminated and reopened.
                                    </li>
                                    <li>
                                        Updated the entire program using C++ object-oriented programming to improve the efficiency and readability of the code.
                                    </li>
                                </ul>
                            </Paragraph>

                        </div>

                        <div className="experience-monitoring-system">
                            <Title
                                level={5}
                                ellipsis
                            >   
                                Engineering Design of energy monitoring system for condo buildings, Engineering Team Leader
                            </Title>                      
                            <Paragraph>
                                <Text>
                                    University of Toronto, Toronto, Canada
                                </Text>
                                <ul>
                                    <li>
                                        Drafted the project requirement approve by the engineering manager with detailed consideration and definition of the Gap, Need, Scope.
                                    </li>
                                    <li>
                                        Developed and tested the machine learning algorithm that helped provide energy usage suggestions.
                                    </li>
                                    <li>
                                        Proposed the measures of success to test the prototype and achieved all of our goals.
                                    </li>

                                </ul>

                            </Paragraph>
                        </div>

                    </div>

                    <div id="skills">
                        <Title className="skills-section-title"
                                level={3}
                                ellipsis
                            >
                                Skills
                        </Title>
                        <div>
                            {/* <Paragraph>
                                <Text>
                                    Stuffs I have been working with in the past year: <br />
                                </Text>
                                <Image  src="https://github-readme-stats-git-master-ericjyli.vercel.app/api/wakatime?username=ericjyli&layout=compact&theme=tokyonight" />
                            </Paragraph> */}
                            <Skills skills={skills} categories={categories} />
                        </div>
                        
                    </div>

                    <div id="courses">

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
                            },
                            {
                                key: 'resume-skills',
                                href: '#skills',
                                title: 'Skills'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumeContent;