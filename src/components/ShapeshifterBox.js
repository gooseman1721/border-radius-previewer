import React from 'react'

export default function ShapeshifterBox(props) {
  const styleBorderRadius = props.styleBorderRadius;

  return (
    <div id='shapeshifterBox' className='box' style={{
      borderRadius: props.styleBorderRadius
    }}>
        This is inside the box {props.styleBorderRadius}
    </div>
  )
}
