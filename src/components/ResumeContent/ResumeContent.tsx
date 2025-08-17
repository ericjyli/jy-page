import React from 'react';
import './ResumeContent.css';


import { Typography, Anchor} from 'antd';
import Skills from '../Skills/Skills';
import { skills, categories } from '../../data/skills';
import { courses } from '../../data/courses';
import { experiences } from '../../data/experiences';
import Course from '../Templates/Courses';
import Experience from '../Templates/Experiences';

const { Title, Paragraph, Link} = Typography;


const ResumeContent = () => {

    return(
        <div className="resume-container">
            <Title 
                id="resume-title"
                level={1}
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
                                <Link href="https://www.ece.utoronto.ca/">
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
                        <div>
                            {experiences.map((experience) => (
                                <Experience
                                    title={experience.title}
                                    overview={experience.overview}
                                    description={experience.description}
                                />
                            )
                            
                            )}
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