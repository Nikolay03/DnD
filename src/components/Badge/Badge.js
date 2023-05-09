import React from 'react';
import './Badge.scss'
import getClassNames from "../../utils/getClassNames";

const Badge = ({children, className = ['']}) => {
  return (
      <div className={getClassNames(['badge', ...className])}>
        {children}
      </div>
  );
};

export default Badge;
