import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div className="calc-wrapper">
      <h3>Calculator</h3>

      <input
        className="calc-input"
        type="number"
        placeholder="Enter number 1"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        className="calc-input"
        type="number"
        placeholder="Enter number 2"
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="calc-buttons">
        <button onClick={() => setResult(+num1 + +num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>-</button>
        <button onClick={() => setResult(num1 * num2)}>×</button>
        <button onClick={() => setResult(num1 / num2)}>÷</button>
      </div>

      <div className="calc-result">
        Result: <span>{result}</span>
      </div>
    </div>
  );
}

export default Calculator;
