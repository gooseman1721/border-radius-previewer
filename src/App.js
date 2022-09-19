import { useState, useEffect } from 'react';
import './App.css';
import ShapeshifterBox from './components/ShapeshifterBox';
import BoxSliderArray from './components/BoxSliderArray';
import BackgroundBoxes from './components/BackgroundBoxes';
import TextBox from './components/TextBox';

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

  const [backgroundVisible, setBackgroundVisible] = useState(true);

  function getSliderArrayValues()
  {
    alert(`TL: ${sliderState.tr}, TR: ${sliderState.tl}
    BR: ${sliderState.bl}, BL: ${sliderState.br}`);
    console.log(sliderState);
  }

  // Converts an object with slider values to a string
  // that can be used in CSS

  function makeBorderRadiusString(sliderStateObj)
  {
    return `${sliderStateObj.tl}% ${sliderStateObj.tr}% ${sliderStateObj.br}% ${sliderStateObj.bl}%`;
  }

  function copyTextBoxTextToClipboard()
  {
    navigator.clipboard.writeText(`border-radius: ${borders};`);
    alert(`Copied to clipboard:\n border-radius: ${borders};`);
  }

  function changeBackgroundState()
  {
    setBackgroundVisible(!backgroundVisible);
  }


  return (

    <div className='App'>
      <div className="appContent">
        <header className="App-header">
          <div className="titleText">
            <h1>Manipulate the shape below!</h1>

          </div>
        </header>
        <div className='container'>

          <BoxSliderArray 
          setArraySliderStateRoot={setArraySliderStateRoot}
          getValuesButton={getSliderArrayValues}>
          </BoxSliderArray>

          <div id='boxDiv' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <ShapeshifterBox 
            styleBorderRadius={borders} 
            boxStyle={'shapeshifterBox'}>
            </ShapeshifterBox>

          </div>


        </div>
        <div className='bottomControlPanel box'>
          <div className='bottomControlPanelButtons'>
          <button 
              id='getSliderArrayValuesButton' 
              className='basicButton'
              onClick={copyTextBoxTextToClipboard}
              >Copy CSS</button>
          <button 
              id='getSliderArrayValuesButton' 
              className='basicButton'
              onClick={changeBackgroundState}
              >Background {backgroundVisible ? "on":"no"}</button>
          </div>

          <TextBox textBoxValue={borders}></TextBox>


        </div>

          
      </div>
      <div className='background'>
        <BackgroundBoxes borders={borders} visible={backgroundVisible}></BackgroundBoxes> 

      </div>
    </div>

  );
}

export default App;
