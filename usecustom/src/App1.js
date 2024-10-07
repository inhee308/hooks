import {useInput} from './Useinput';
import './App.css';


function displayMessage(message){
  alert(message)
}
function App() {

    const [inputValue, handleChange, handleSubmit] = useInput('하하하하',displayMessage);
    // const [inputValue1, handleChange1] = useInput('화이팅');

  return (
    <div className="App">
      <h1>useInput</h1>
      <input type="text" value={inputValue} onChange={handleChange}/>
      {/* <input type="text" value={inputValue1} onChange={handleChange1}/> */}
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
