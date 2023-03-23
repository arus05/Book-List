import React from "react"
import { BookContext } from "../contexts/BookContext"

export default function BookDetails(props){

  const { removeBook } = React.useContext(BookContext);

  return(
    <li className="book" onClick={(event) => removeBook(props.book.id)}>
      <p className="book-title">
        {props.book.title}
      </p>
      <p className="book-author">
        {props.book.author}
      </p>
    </li>
  )
}