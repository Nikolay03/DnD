import React from 'react'


const SvgIcon = ({
  children,
  fontSize = '8px',
  viewBox = '0 0 24 24',
  height = '1em',
  width = '1em',
  xmlns = 'http://www.w3.org/2000/svg',
  fill,
  ...props
}) => {
  return (
    <svg fill={fill || 'currentColor'} fontSize={fontSize} viewBox={viewBox} height={height} width={width} xmlns={xmlns} {...props}>
      {children}
    </svg>
  )
}

export default SvgIcon
