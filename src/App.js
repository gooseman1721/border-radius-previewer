import { useState } from 'react';
import './App.css';
import ShapeshifterBox from './components/ShapeshifterBox';
import BoxSlider from './components/BoxSlider';

function App(props) {

  const [borders, setBorders] = useState(props.borders);

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
        <div id='sliderContainer' className='box'>

          {/* <div className='sliderWrapper'>
            <input type="range" id="slider3" className='slider' />
          </div> */}
          <BoxSlider></BoxSlider>
          <BoxSlider></BoxSlider>
          <BoxSlider></BoxSlider>
          <BoxSlider></BoxSlider>
          
     
          
        </div>
        <div id='boxDiv' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <ShapeshifterBox></ShapeshifterBox>
        </div>
      </div>

      
    </div>
  );
}

export default App;
