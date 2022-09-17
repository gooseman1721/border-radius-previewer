import { useState, useEffect } from 'react';
import './App.css';
import ShapeshifterBox from './components/ShapeshifterBox';
import BoxSliderArray from './components/BoxSliderArray';

function App(props) {

  // This keeps the dynamically updated string with CSS
  // border-radius property determining the roundness of
  // ShapeshifterBox. 
  // Updated by useEffect with sliderState
  // Sent to ShapeshifterBox

  const [borders, setBorders] = useState(props.borders);

  // This keeps an object with values from BoxSliderArray.
  // Updated by BoxSliderArray <= BoxSlider

  const [sliderState, setArraySliderStateRoot] = useState({
    tr: 0,
    tl: 0,
    bl: 0,
    br: 0,
  });
  
  useEffect(() => {
    setBorders(makeBorderRadiusString(sliderState))
  }, [sliderState])

  function getSliderArrayValues()
  {
    alert(`TR: ${sliderState.tr}, TL: ${sliderState.tl}
    BL: ${sliderState.bl}, BR: ${sliderState.br}`);
    console.log(sliderState);
  }

  // Converts an object with slider values to a string
  // that can be used in CSS

  function makeBorderRadiusString(sliderStateObj)
  {
    return `${sliderStateObj.tr}% ${sliderStateObj.tl}% ${sliderStateObj.bl}% ${sliderStateObj.br}%`;
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="titleText">
          <h1>Manipulate the shape below!</h1>
          <br></br>
          [|]
        </div>
      </header>
      <div className='container'>

        <BoxSliderArray 
          setArraySliderStateRoot={setArraySliderStateRoot}>
          getValuesButton={getSliderArrayValues}
        </BoxSliderArray>

        <div id='boxDiv' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}>
          <ShapeshifterBox styleBorderRadius={borders}></ShapeshifterBox>

        </div>


      </div>
      <div className='bottomControlPanel'>
        <button 
            id='getSliderArrayValuesButton' 
            className='basicButton'
            onClick={getSliderArrayValues}
            >Get values</button>
      </div>

      
    </div>
  );
}

export default App;
