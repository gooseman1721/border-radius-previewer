import React from 'react'
import BoxSlider from './BoxSlider'

// This component is a box with 4 BoxSlider components.
// BoxSliders update App component state and bypass BoxSliderArray

export default function BoxSliderArray(props) {


  return (
    <div id='sliderArrayContainer' className='box'>
        <div id='sliderArray'>
            <BoxSlider 
                setArraySliderState={props.setArraySliderStateRoot}
                corner="tl"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="tr"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="br"></BoxSlider>
            <BoxSlider
                setArraySliderState={props.setArraySliderStateRoot}
                corner="bl"></BoxSlider>
        </div>
        <button 
            id='getSliderArrayValuesButton' 
            className='basicButton'
            onClick={props.getValuesButton}
            >Get values</button>
        
    </div>
  )
}
