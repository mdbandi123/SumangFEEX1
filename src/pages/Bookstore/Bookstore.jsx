import React, { useRef, useState } from "react";
import BookstoreForm from "./BookstoreForm";
import BookstoreList from "./BookstoreList";
import styles from "./Bookstore.module.css";

export default function Bookstore({back}){
  const [books, setBooks] = useState([]);

  const handleAddBooks = (formPayload) => {
    setBooks((prev) => {
      return [...prev, formPayload];
    })

    console.log(formPayload);
  }
  
  return (
    <section className={styles.mainCont}>
      <h1>Bookstore</h1>
      <BookstoreForm submit={handleAddBooks} back={back}/>
      {books.length > 0 && <BookstoreList data={books}/>}
    </section>
  )
}