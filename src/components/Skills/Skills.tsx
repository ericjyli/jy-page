import React, { useState } from 'react';
import PropTypes from 'prop-types';


interface Skill {
  title: string;
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
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return skills
      .sort(comparator)
      .filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={categories}
          data={skill}
          key={skill.title}
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
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
