import React, { useState } from 'react'
import BoxSlider from './BoxSlider'

export default function BoxSliderArray() {

    const [sliderState, setArraySliderState] = useState({
        tr: 0,
        tl: 0,
        bl: 0,
        br: 0,
    });


    function getSliderArrayValues()
    {
        alert(`TR: ${sliderState.tr}, TL: ${sliderState.tl}
        BL: ${sliderState.bl}, BR: ${sliderState.br}`);
        console.log(sliderState);
    }


  return (
    <div id='sliderArrayContainer' className='box'>
        <div id='sliderArray'>
            <BoxSlider 
                setArraySliderState={setArraySliderState}
                corner="tr"></BoxSlider>
            <BoxSlider
                setArraySliderState={setArraySliderState}
                corner="tl"></BoxSlider>
            <BoxSlider
                setArraySliderState={setArraySliderState}
                corner="bl"></BoxSlider>
            <BoxSlider
                setArraySliderState={setArraySliderState}
                corner="br"></BoxSlider>
        </div>
        <button 
            id='getSliderArrayValuesButton' 
            className='basicButton'
            onClick={getSliderArrayValues}
            >Get values</button>
        
    </div>
  )
}
