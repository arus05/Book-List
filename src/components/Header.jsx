import React from "react";
import { BookContext } from "../contexts/BookContext"

function Header(){
  const {books} = React.useContext(BookContext)
  const bookCountMessage = 
    `Currently, you have ${books.length} ${books.length === 1 ? "book" : "books"} to go through...`

  return(
    <header className="header">
      <h1 className="title">
        Arus's Reading List
      </h1>
      <p className="book-count">
        {bookCountMessage}
      </p>
    </header>
  )
}

export default Header