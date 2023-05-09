import React from 'react'

const Grid = ({children, style,  ...props}) => {
    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)'
    }
    return (
      <div style={{...styles, ...style}} {...props}>
        {children}
      </div>
    )
}

export default Grid
