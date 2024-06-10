import './App.css'
import Accordian from './Components/Accordian/Accordian';
import ColorGenerater from './Components/ColorGenerater/ColorGenerator';
import StarRating from './Components/StarRating/StarRating';

function App() {

  return (
    <div className='app'>
      {/* Accordian component */}
      <Accordian />
      {/* Random color component */}
      <ColorGenerater />
      {/* Star Rating component */}
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App
