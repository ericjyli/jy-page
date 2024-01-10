import React, { ReactNode } from 'react';
import { Typography} from 'antd'; // Assuming you are using Ant Design components

const { Title, Text, Paragraph } = Typography;

interface ExperienceProps {
  title: string;
  overview?: ReactNode; // ReactNode allows JSX elements or strings
  description: ReactNode[];
}

const Experience: React.FC<ExperienceProps> = ({ title, overview, description }) => {
  return (
    <div>
      <Title level={5} ellipsis>
        {title}
      </Title>
      {overview && (
        <Paragraph>
          <Text>{overview}</Text>
        </Paragraph>
      )}
      <Paragraph>
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Paragraph>
    </div>
  );
};

export default Experience;
