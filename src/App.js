import './App.css';
import { useState } from 'react';
import Dropdown from './components/Dropdown';

const API_URL = 'http://localhost:8080/calculator'
function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState('add');
  const [finalResult, setResult] = useState();

  const setSelectedOperation = (symbol) => {
    console.log(symbol)
    setOperation(symbol)
  }

  const handleClick = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/${operation}/${firstNumber}/${secondNumber}`)
      .then(response => response.json())
      .then(result => setResult(result))
  }

  return (
    <div className="App">
      <div className="calcu">
        <input onChange={event => setFirstNumber(event.target.value)} value={firstNumber} placeholder='First Number' required />
        <Dropdown onSelectOperation={setSelectedOperation} />
        <input onChange={event => setSecondNumber(event.target.value)} value={secondNumber} placeholder='Second Number' required />
      </div>
      <button onClick={handleClick}>Submit</button>

      <p>{firstNumber} {operation} {secondNumber} </p>
      <p className='result'>Result: {finalResult}</p>

    </div>
  );
}

export default App;
