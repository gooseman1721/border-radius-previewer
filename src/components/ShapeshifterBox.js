import React from 'react'

// Box that changes border shape.
// Receives a CSS formated string to change its style
// from App component on every render (useEffect hook)

export default function ShapeshifterBox(props) {

  const cssStyle = props.animationDelay ? {borderRadius: props.styleBorderRadius,
  animationDelay: props.animationDelay}:{borderRadius: props.styleBorderRadius};

  return (
    <div className={`box ${props.boxStyle}`} style={cssStyle}>
        <div className='shapeshifterBoxText'>
          {props.styleBorderRadius}
        </div>
    </div>
  )
}
