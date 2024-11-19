import { useRef } from "react";

export default function BookstoreForm({submit}) {
  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const qtyRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formPayload = {
      isbn: isbnRef.current.value,
      title: titleRef.current.value,
      author: authorRef.current.value,
      price: priceRef.current.value,
      qty: qtyRef.current.value
    }

    submit(formPayload);
  }

  return(
    <section>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="isbn">ISBN:</label> 
          <input type="text" name="isbn" ref={isbnRef}/>
        </div>
        <div>
          <label htmlFor="title">Title:</label> 
          <input type="text" name="title" ref={titleRef}/>
        </div>
        <div>
          <label htmlFor="author">Author:</label> 
          <input type="text" name="author" ref={authorRef}/>
        </div>
        <div>
          <label htmlFor="price">Price:</label> 
          <input type="text" name="price" ref={priceRef}/>
        </div>
        <div>
          <label htmlFor="qty">Quantity:</label> 
          <input type="text" name="qty" ref={qtyRef}/>
        </div>
        <button>Add Record</button>
      </form>
    </section>
  );
}