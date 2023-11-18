import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('')}></button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={clear} className="clear">C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
