import {useRef,useState} from 'react'
import './App.css';

function App1() {
  const [count, setCount] = useState(0);
  const countRef=useRef(0);

  console.log(countRef);
  console.log('렌더링....');

  const increaseCountState = () =>{
    setCount(count+1)
  }

  const increaseCountRef = () =>{
    countRef.current=countRef.current+1;
    console.log('Ref:',countRef.current);
  }

  return (
    <div className="App">
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State값 변경</button>
      <button onClick={increaseCountRef}>Ref값 변경</button>
    </div>
  );
}

export default App1;
