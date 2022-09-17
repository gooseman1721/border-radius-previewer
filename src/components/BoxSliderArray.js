import React, { useState } from 'react'
import BoxSlider from './BoxSlider'

// This component is a box with 4 BoxSlider components.
// BoxSliders update App component state and bypass BoxSliderArray

export default function BoxSliderArray(props) {

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
                setArraySliderState={props.setArraySliderStateRoot}
                corner="tr"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="tl"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="bl"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="br"></BoxSlider>
        </div>
        <button 
            id='getSliderArrayValuesButton' 
            className='basicButton'
            onClick={props.getValuesButton}
            >Get values</button>
        
    </div>
  )
}
