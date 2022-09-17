import { useState, useEffect } from 'react';
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
  
  useEffect(() => {
    setBorders(makeBorderRadiusString(sliderState))
  }, [sliderState])

  function getSliderArrayValues()
  {
    alert(`TR: ${sliderState.tr}, TL: ${sliderState.tl}
    BL: ${sliderState.bl}, BR: ${sliderState.br}`);
    console.log(sliderState);
  }

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
