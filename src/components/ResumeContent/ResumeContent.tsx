import React from 'react';
import './ResumeContent.css';


import { Typography, Anchor} from 'antd';
import Skills from '../Skills/Skills';
import { skills, categories } from '../../data/skills';
import { courses } from '../../data/courses'
import Course from '../Courses/Courses'

const { Title, Paragraph, Text, Link} = Typography;


const ResumeContent = () => {

    return(
        <div className="resume-container">
            <Title 
                id="resume-title"
                level={1}
                style={{fontFamily: 'Andika'}}
            >
                    Resume
            </Title>

            <div className="resume-main-container">
                <div className="resume-main-content-container">
                
                    <div id="education">
                        <Title className="education-section-title"
                            level={2}
                            ellipsis
                        >
                            Education
                        </Title>
                        <div className="education-section-content">
                            <Paragraph>
                                Bachelor of Applied Science and Engineering in Computer Engineering + PEY Co-op
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
                                level={2}
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
                                    Main project: <Link href="https://www.navit.ai">Navit.ai</Link> <br />
                                    Navit is a platform for exploring various types of bots. It offers users easy access to these intriguing bots and provides developers with the convenience of integrating their API Bots into the platform.

                                </Text>

                                <ul>
                                    <li>
                                        Developed synchronous and asynchronous callback interfaces between the backend server of the website and the API bots server.
                                    </li>
                                    <li>
                                        Drafted detailed documentation with Gitbook for developers to be able to integrate their chatbots on the website in less than 10 minutes with up to 5 additional chat functionalities.                    
                                    </li>
                                    <li>
                                        Applied prompt engineering integrated with external tools to build more than 10 API bots, and enabled interactions between bots which amazed users.
                                    </li>
                                    <li>
                                        Containerized the API bots with Docker and deployed them on serverless Kubernetes cluster, using Jenkins for the CI and Argo for the CD to automate the pipeline.
                                    </li>
                                </ul>
                            </Paragraph>
                        </div>

                        <div className="experience-usgas">
                            <Title
                                level={5}
                                ellipsis
                            >
                                US Natural Gas Data Visualization Website - Project Leader
                            </Title>
                            <Paragraph>
                                <Text>
                                    A project with a group of 3 developing a website which calls several APIs for the data, and visualizes the data using tools including Pandas, Matplotlib, etc.
                                </Text>
                                <ul>
                                    <li>
                                        Engineered and executed the backend interface structures that reduced the server's response time utilizing FastAPI.                                   
                                    </li>
                                    <li>
                                        Established a comprehensive system including front-end, back-end, and database server using AWS as the cloud provider, ensuring seamless functionality.
                                    </li>
                                    <li>
                                        Streamlined smooth deployment process by setting up the server on an EC2 instance with Nginx managing the proxy and Github Action triggered by push events.
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
                                        Designed optimized data structures for quick loading and storage of data from external API.
                                    </li>
                                    <li>
                                        Developed a user-friendly map application interface using the EZGL library.
                                    </li>
                                    <li>
                                        Implemented algorithms for efficient path finding within 3 seconds, and generated path instructions with text-to-speech accessibility feature.
                                    </li>
                                    <li>
                                        Parallelize various algorithms to optimize the solution of the Traveling Salesman Problem.
                                    </li>
                                </ul>
                                
                            </Paragraph>
                        </div>

                        <div className="experience-processor">
                            <Title 
                                level={5}
                                ellipsis
                            >
                                Advanced Processor Design - Hardware Developer
                            </Title>
                            <Paragraph>
                                <Text>
                                    University of Toronto, Toronto, Canada
                                </Text>
                                <ul>
                                    <li>
                                        Implemented a basic processor that can do basic register operations using Verilog.
                                    </li>
                                    <li>
                                        Enhanced the processor with more advanced functionalities by including a program counter, memory interface and more operations such as push&pop, branch, and etc.
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
                                        Implemented backtrack algorithm to generate random solvable Sudoku games and stored the data of every finished game.
                                    </li>
                                    <li>
                                        Designed a user-friendly interface with clear frames and different colors, making it very easy for the user to read the board and fill in numbers to play the game.
                                    </li>
                                    <li>
                                        Updated the entire program using C++ object-oriented programming to improve the readability and extensibility.        
                                    </li>
                                </ul>
                            </Paragraph>

                        </div>

                        <div className="experience-monitoring-system">
                            <Title
                                level={5}
                                ellipsis
                            >   
                                Engineering Design of energy monitoring system for condo buildings - Engineering Team Leader
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
                                level={2}
                                ellipsis
                        >
                            Skills
                        </Title>
                        <div>
                            <Skills skills={skills} categories={categories} />
                        </div>
                        
                    </div>

                    <div id="courses">
                        <Title className="courses-section-title"
                                level={2}
                                ellipsis
                        >
                            Selected Courses
                        </Title>
                        <div>
                            {courses.map((course) => (
                                <Course
                                    index={course.index}
                                    name={course.name}
                                    link={course.link}
                                />
                            ))}
                        </div>

                    </div>

                    <div id="download">
                        <Title className="download-section-title"
                                level={2}
                                ellipsis
                        >
                            Resume Download
                        </Title>
                        <Paragraph>
                            Please click <Link href="https://drive.google.com/file/d/1Kc92KtOWa-WdSRBQqvYCDpj7lC6HOqFA/view?usp=sharing">here</Link>.<br />
                            Note that due to the page limit, the resume does not include all the experiences and projects as listed on this website.
                        </Paragraph>
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
                            },
                            {
                                key: 'resume-courses',
                                href: '#courses',
                                title: 'Courses'
                            },
                            {
                                key: 'resume-download',
                                href: '#download',
                                title: 'Download'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumeContent;