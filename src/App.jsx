import './App.css'
import Accordian from './Components/Accordian/Accordian';
import ColorGenerater from './Components/ColorGenerater/ColorGenerator';

function App() {

  return (
    <div className='app'>
      {/* Accordian component */}
      <Accordian />
      {/* Random color component */}
      <ColorGenerater />
    </div>
  )
}

export default App
