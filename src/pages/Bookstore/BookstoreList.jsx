import styles from "./Bookstore.module.css";

export default function BookstoreList({data}) {
  return(
    <>
      <table>
        <tbody>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {data.map((book, idx) => {
            return (
            <tr key={idx}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.qty}</td>
            </tr>
            )
          })}
        </tbody>
		  </table>
    </>
  )
}