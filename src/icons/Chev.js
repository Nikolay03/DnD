import React from 'react'
import SvgIcon from './SvgIcon'

const Chev = ({ ...props }) => {
  return (
    <SvgIcon viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 1L5 5L9 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgIcon>
  )
}
export default Chev
