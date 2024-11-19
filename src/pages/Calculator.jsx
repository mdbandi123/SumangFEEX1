import React, { useRef, useState } from "react";
import { calculate } from "../util/calculate";

export default function Calculator({back}) {
  const [answer, setAnswer] = useState(0);
  const operOneRef = useRef(null);
  const operTwoRef = useRef(null);
  const operationRef = useRef(null);
  
  const operArr = ["+", "-", "*", "/"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const operation = operationRef.current.value.trim();
    const operOne = parseOperand(operOneRef.current.value.trim());
    const operTwo = parseOperand(operTwoRef.current.value.trim());

    setAnswer(calculate(operation, operOne, operTwo));
  }

  const parseOperand = (operand) => {
    //TODO: Validation
    return parseFloat(operand);
  }

  return (
    <>
      <button onClick={back}>Go back to menu</button>
      <h1>Calculator</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={operOneRef}/>
        <select ref={operationRef}>
          {operArr.map((oper, idx)=>{
            return <option key={idx}>{oper}</option>
          })}
        </select>
        <input type="text" ref={operTwoRef}/>
        <button>Calculate</button>
      </form>
      {answer > 0 &&
        <div>
          <h1>The result of calculating {operOneRef.current.value} {operationRef.current.value} {operTwoRef.current.value} is {answer}</h1>
        </div>
       }
    </>
  );
}