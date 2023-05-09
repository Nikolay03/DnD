import React from 'react';

const DropdownContent = ({children, toggleMenu}) => {
  return (
      <div className={'dropdown__menu'}>
        <div className={'dropdown__menu__list'}>
          {React.Children.map(children, (child, key) => {
            if (child) {
              return React.cloneElement(child, { key, toggleMenu, ...child.props })
            }
          })}
        </div>
      </div>
  );
};

export default DropdownContent;
