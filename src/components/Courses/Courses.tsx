import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text, Link } = Typography;

interface CourseData {
    index: string;
    name: string;
    link: string;
}

const Course: React.FC<CourseData> = ({ index, name, link }: CourseData) => {
    return (
        <span className="course">
            <Text> {index} </Text>
            <Link href={link}>{name}</Link> | 
        </span>
    );
};

export default Course;
