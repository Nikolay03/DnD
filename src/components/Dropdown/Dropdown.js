import React, { useRef, useState } from 'react'
import DropdownContent from './DropdownContent'
import './dropdown.scss'
import {Fab} from "../Button/Fab";
import {More} from "../../icons";

const Dropdown = props => {
  const { trigger, backgroundColor, dotColor, alternate, children, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef()

  const toggleMenu = event => {
    event.stopPropagation()
    if (isOpen) setIsOpen(false)
    else {
      setIsOpen(true)
    }
  }

  return (
    <div ref={wrapperRef} className={'dropdown'} {...rest}>
      <Fab isFill={true} {...rest} onClick={toggleMenu} className={[isOpen && 'btn_fab_fill_active']}>
        <More/>
      </Fab>
      {isOpen && (
          <DropdownContent toggleMenu={toggleMenu}>
            {children}
          </DropdownContent>
      )}
    </div>
  )
}

Dropdown.defaultProps = {
  dotColor: '#ced0dd',
  mode: 'vertical'
}

export default Dropdown
