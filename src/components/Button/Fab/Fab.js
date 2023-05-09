import React from 'react';
import './Fab.scss'
import getClassNames from "../../../utils/getClassNames";

const Fab = ({children, isStroke, isFill, className = [], ...rest}) => {
  return (
      <button className={getClassNames(['btn_fab', isStroke && 'btn_fab_stroke', isFill && 'btn_fab_fill', ...className])} {...rest}>
        {children}
      </button>
  );
};

export default Fab;
