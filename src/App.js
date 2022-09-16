import { useState } from 'react';
import './App.css';
import ShapeshifterBox from './components/ShapeshifterBox';
import BoxSlider from './components/BoxSlider';
import BoxSliderArray from './components/BoxSliderArray';

function App(props) {

  const [borders, setBorders] = useState(props.borders);

  const [sliderState, setArraySliderStateRoot] = useState({
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
        <ShapeshifterBox></ShapeshifterBox>
        <button 
            id='getSliderArrayValuesButton' 
            className='basicButton'
            onClick={getSliderArrayValues}
            >Get values</button>
        </div>
      </div>

      
    </div>
  );
}

export default App;
