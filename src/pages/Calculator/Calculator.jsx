import React, { useRef, useState } from "react";
import { calculate } from "../../util/calculate";
import styles from "./Calculator.module.css";

export default function Calculator({back}) {
  const [answer, setAnswer] = useState(0);
  const [isInvalid, setIsInvalid] = useState(false);
  const operOneRef = useRef(null);
  const operTwoRef = useRef(null);
  const operationRef = useRef(null);
  
  const operArr = ["+", "-", "*", "/"];

  const parseOperand = (operand) => {
    return parseFloat(operand);
  }

  const validateIsDouble = (operand) => {
    return isNaN(operand) ? false : true;
  }

  const validatePrecision = (operand) => {
    const regex = /^(-)?[0-9]+(\.[0-9]{1,3})?$/;
    return regex.test(`${operand}`);
  }

  const validateRange = (operand) => {
    return (operand >= -1000000.00 && operand <= 1000000.00);
  }

  const validateOperand = (operOne, operTwo) => {
    if (!validateIsDouble(operOne) || !validateIsDouble(operTwo)) {
      return false;
    } 

    if(!validatePrecision(operOne) || !validatePrecision(operTwo)){
      return false;
    }

    if(!validateRange(operOne) || !validateRange(operTwo)) {
      return false;
    }

    return true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const operation = operationRef.current.value.trim();
    const operOne = parseOperand(operOneRef.current.value.trim());
    const operTwo = parseOperand(operTwoRef.current.value.trim());

    const isValid = validateOperand(operOne, operTwo);

    if (!isValid){
      setIsInvalid(true);
      setAnswer(0);
      return;
    }

    setIsInvalid(false);
    setAnswer(calculate(operation, operOne, operTwo));
  }

  return (
    <section className={styles.mainCont}>
      <div className={styles.headerCont}>
        <h1>Calculator</h1>
      </div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.inputCont}>
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" ref={operOneRef}/>
          <select ref={operationRef}>
            {operArr.map((oper, idx)=>{
              return <option key={idx}>{oper}</option>
            })}
          </select>
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" ref={operTwoRef}/>
        </div>
        <div className={styles.buttonCont}>
          <button className={styles.button} type="button" onClick={back}>Go back to menu</button>
          <button className={`${styles.button} ${styles.calculate}`}>Calculate</button>
        </div>
      </form>
      {answer > 0 &&
        <div>
          <h1>The result of calculating {operOneRef.current.value} {operationRef.current.value} {operTwoRef.current.value} is {answer}</h1>
        </div>
       }
    </section>
  );
}