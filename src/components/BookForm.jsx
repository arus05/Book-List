import React from "react"
import { BookContext } from "../contexts/BookContext";

export default function BookForm(){

  const { addBook } = React.useContext(BookContext);
  
  const [title, setTitle] = React.useState("")
  const [author, setAuthor] = React.useState("")

  function handleSubmit(event){
    event.preventDefault();
    addBook(title, author);
    setTitle("")
    setAuthor("")
  }

  return(
    <form onSubmit={handleSubmit} className="book-form">
      <h2 className="form-title">Add new book</h2>
      <input
        type="text" placeholder="Book Title" required value={title}
        className="title-input"
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text" placeholder="Book Author" required value={author}
        className="author-input"
        onChange={(event) => setAuthor(event.target.value)}
      />

      <input type="submit" className="submit-btn" value="Add new book"/>
    </form>
  )
}