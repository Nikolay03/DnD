import React from 'react'


// onClick is required!!!
const MenuListItem = ({ children, onClick, toggleMenu, ...rest }) => {
  const onClickMenu = event => {
    event.stopPropagation()
    if (typeof onClick === 'function') {
      toggleMenu(event)
      return onClick(event)
    }
  }

  return (
    <div onClick={onClickMenu} {...rest} className={'dropdown__menu__list__item'}>
      {children}
    </div>
  )
}

export default MenuListItem
