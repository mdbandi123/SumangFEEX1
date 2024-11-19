import React, { useRef, useState } from "react";
import BookstoreForm from "../components/BookstoreForm";
import BookstoreList from "../components/BookstoreList";

export default function Bookstore({back}){
  const [books, setBooks] = useState([]);

  const handleAddBooks = (formPayload) => {
    setBooks((prev) => {
      return [...prev, formPayload];
    })

    console.log(formPayload);
  }
  
  return (
    <>
      <button onClick={back}>Go back to menu</button>
      <h1>Bookstore</h1>
      <BookstoreForm submit={handleAddBooks}/>
      {books.length > 0 && <BookstoreList data={books}/>}
    </>
  )
}