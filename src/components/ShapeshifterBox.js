import React from 'react'

// Box that changes border shape.
// Receives a CSS formated string to change its style
// from App component on every render (useEffect hook)

export default function ShapeshifterBox(props) {

  return (
    <div id='shapeshifterBox' className='box' style={{
      borderRadius: props.styleBorderRadius
    }}>
        This is inside the box {props.styleBorderRadius}
    </div>
  )
}
