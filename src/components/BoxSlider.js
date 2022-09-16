import React, { useState } from 'react'

export default function BoxSlider(props) {
  
    const [sliderValue, setSliderValue] = useState(0);

    function handleChange(e)
    {
        setSliderValue(e.target.value);
        //props.setArraySliderState(e.target.value);
        props.setArraySliderState( prevValues => {
            return { ...prevValues, [props.corner]: e.target.value}
        } )
        
    }

  return (
    <div className='sliderWrapper'>
        <div className='sliderName'>{props.corner}</div>
        <input
         type="range" 
         className='slider' 
         min="0" 
         max="100" 
         step="1"
         value={sliderValue}
         onChange={handleChange} />
         <br></br>
        <div className='sliderValue'>{sliderValue}</div>
        
    </div>
  )
}
