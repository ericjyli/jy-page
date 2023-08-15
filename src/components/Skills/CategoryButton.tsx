import React from 'react';

import { Radio } from 'antd';

interface CategoryButtonProps {
  label: string;
  handleClick: (label: string) => void;
  active: Record<string, boolean>;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ handleClick, active, label }) => (
  <Radio.Button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    onClick={() => handleClick(label)}
    value={label}
  >
    {label}
  </Radio.Button>
);

export default CategoryButton;
