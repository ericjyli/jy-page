import React from 'react';
import PropTypes from 'prop-types';

interface SkillData {
  category: string[];
  competency: number;
  name: string;
}

interface Category {
  name: string;
  color: string;
}

interface SkillBarProps {
  data: SkillData;
  categories: Category[];
}

const SkillBar: React.FC<SkillBarProps> = ({ data, categories }) => {
  const { category, competency, name } = data;

  // TODO: Consider averaging colors
  const titleStyle: React.CSSProperties = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle: React.CSSProperties = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}><span>{name}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    competency: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
