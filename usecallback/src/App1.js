
import './App.css';
import {useState, useEffect, useCallback} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const sumFunction=useCallback(()=>{
    console.log(`sumFunc:number : ${number}`)
  },[number])

  useEffect(()=>{
    console.log('sumFunction 변경되었습니다')
  },[sumFunction])

  return (
    <div className="App">
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <button onClick={()=>{setToggle(!toggle)}}>{toggle.toString()}</button>
        <br />
        <button onClick={sumFunction}>call sumFuct</button>
    </div>
  );
}

export default App;
