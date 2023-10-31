
import { useState } from 'react';
import './App.css';
import { Chess } from './component/Chess';

function App() {
  const [board, setboard] = useState(4)
  const handleOnchange=(e)=>{
    setboard(e.target.value)
  }

  return (
   <div className='home'>
    <h1>ChessBoard</h1>
    <label htmlFor="">Select Board Size:</label>
    <input
    type='number'
    id='boards'
    value={board}
    onChange={handleOnchange}
    >
    </input>
    <Chess n={board}/>
   </div>

  );
}

export default App;
