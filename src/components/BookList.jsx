import React from "react"
import { BookContext } from "../contexts/BookContext"
import BookDetails from "./BookDetails"

function BookList(){
  const { books } = React.useContext(BookContext);

  const bookElements = books.map(book => (
    <BookDetails key={book.id} book={book}/>
  ))

  return(
    <section className="book-list">
      <ul className="books">
        {bookElements}
      </ul>
    </section>
  )
}

export default BookList