import React from 'react'

export default function TextBox(props) {


  return (
    <div className='textBoxContainer'>
        <input 
        type='text' 
        className='textBox' 
        value={`border-radius: ${props.textBoxValue};`} 
        readonly={true}></input>
    </div>
  )
}
