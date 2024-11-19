import { useRef, useState } from "react";
import styles from "./BookstoreForm.module.css";

export default function BookstoreForm({submit, back}) {
  const [isInvalid, setIsInvalid] = useState(false);
  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const qtyRef = useRef(null);

  const validateIsEmpty = (field) => {
    if (field.trim().length === 0 || field === null){
      return false;
    }
    return true;
  }

  const validateIsDouble = (field) => {
    const regex = /^(-)?[0-9]+(\.[0-9]+)?$/;
    return regex.test(`${field}`);
  }

  const validateIsInteger = (field) => {
    const regex = /^(-)?[0-9]+$/;
    return regex.test(`${field}`);
  }

  const validateIsbnLength = (field) => {
    return field.length <= 20;
  }

  const validateFields = (isbn, title, author, price, qty) => {
    if(!validateIsEmpty(isbn) || 
      !validateIsEmpty(title) || 
      !validateIsEmpty(author) || 
      !validateIsEmpty(price) || 
      !validateIsEmpty(qty)){
        return false;
    }

    if(!validateIsDouble(price)){
      return false;
    }

    if(!validateIsInteger(qty)){
      return false;
    }

    if(!validateIsbnLength(isbn)){
      return false;
    }

    return true;
  }

  const resetInputFields = () => {
    isbnRef.current.value = null;
    titleRef.current.value = null;
    authorRef.current.value = null;
    priceRef.current.value = null;
    qtyRef.current.value = null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValid = validateFields(isbnRef.current.value,titleRef.current.value,
                                  authorRef.current.value,priceRef.current.value,
                                  qtyRef.current.value);

    if(!isValid){
      setIsInvalid(true);
      return;
    }

    const formPayload = {
      isbn: isbnRef.current.value,
      title: titleRef.current.value,
      author: authorRef.current.value,
      price: parseFloat(priceRef.current.value),
      qty: parseInt(qtyRef.current.value)
    }

    resetInputFields();
    setIsInvalid(false);
    submit(formPayload);
  }

  return(
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.inputCont}>
          <label htmlFor="isbn">ISBN:</label> 
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" name="isbn" ref={isbnRef}/>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="title">Title:</label> 
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" name="title" ref={titleRef}/>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="author">Author:</label> 
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" name="author" ref={authorRef}/>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="price">Price:</label> 
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" name="price" ref={priceRef}/>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="qty">Quantity:</label> 
          <input className={isInvalid ? `${styles.input} ${styles.errorInput}` : styles.input} type="text" name="qty" ref={qtyRef}/>
        </div>
        <div className={styles.buttonCont}>
          <button onClick={back} type="button" className={styles.button}>Go back to menu</button>
          <button className={styles.button}>Add Record</button>
        </div>
      </form>
    </>
  );
}