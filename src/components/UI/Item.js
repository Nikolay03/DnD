import React from 'react'

const Item = ({children, style, xs, ...props}) => {
    const styles = {
        gridColumn: `span ${xs}`
    }
    return (
      <div style={{...styles, ...style}} {...props}>
        {children}
      </div>
    )
}

export default Item
