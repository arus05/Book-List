import React from "react"
import { BookContext } from "../contexts/BookContext"

export default function BookDetails(props){

  const { dispatch } = React.useContext(BookContext);

  return(
    <li className="book"
        onClick={(event) => dispatch({
          type: "REMOVE_BOOK",
          id: props.book.id
        })}
    >
      <p className="book-title">
        {props.book.title}
      </p>
      <p className="book-author">
        {props.book.author}
      </p>
    </li>
  )
}