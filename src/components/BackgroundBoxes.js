import React from 'react';
import ShapeshifterBox from './ShapeshifterBox';

export default function BackgroundBoxes(props) {

    const background_rows = [];

    for (let i = -7; i <= 7; i++)
    {
      for (let j = 0; j < 25; j++)
      {
        background_rows.push(<ShapeshifterBox 
                              styleBorderRadius={props.borders}
                              boxStyle={'shapeshifterBoxBackground'}
                              animationDelay={`${j*500}ms`}
                              animationOffset={`${i*350}%`}>
                              </ShapeshifterBox>)
      }
    }

  return (
    <div className='backgroundRow'>
        {background_rows}
    </div>
  )
}
