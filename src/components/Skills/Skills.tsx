import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './CategoryButton';
import SkillBar from './SkillBar';

interface Skill {
  name: string;
  competency: number;
  category: string[];
}

interface Category {
  name: string;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

const Skills: React.FC<SkillsProps> = ({ skills, categories }) => {
  const initialButtons: Record<string, boolean> = Object.fromEntries([
    ['All', false],
    ...categories.map(({ name }) => [name, false])
  ]);

  const [buttons, setButtons] = useState<Record<string, boolean>>(initialButtons);

  const handleChildClick = (label: string) => {
    const newButtons: Record<string, boolean> = Object.keys(buttons).reduce((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});

    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    const actCat = Object.keys(buttons).reduce((cat, key) => (
      buttons[key] ? key : cat
    ), 'All');

    const comparator = (a: Skill, b: Skill) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.name > b.name) ret = 1;
      else if (a.name < b.name) ret = -1;
      return ret;
    };

    return skills
      .sort(comparator)
      .filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={categories}
          data={skill}
          key={skill.name}
        />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
        <p>Note: I think these sections are silly, but everyone seems to have one.
          Here is a *mostly* honest overview of my skills.
        </p>
      </div>
      <div className="skill-button-container">
        {getButtons()}
      </div>
      <div className="skill-row-container">
        {getRows()}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    competency: PropTypes.number.isRequired,
    category: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
