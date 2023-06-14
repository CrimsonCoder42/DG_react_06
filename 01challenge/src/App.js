import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';

function App() {
  const [color, setColor] = useState('');

  const handleColorChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ColorBox  color={color}/>
        <ColorInput handleColorChange={handleColorChange}/>
      </header>
      
    </div>
  );
}

export default App;
