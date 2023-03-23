import React from "react"
import {v4 as uuidv4} from "uuid"

export const BookContext = React.createContext();

function BookContextProvider(props){

  const [books, setBooks] = React.useState([
    {
      title: "The Name of The Wind", author: "Patrick Rothfuss", id: 1
    },
    {
      title: "Shadow and Bone", author: "Leigh Bardugo", id: 2
    }
  ])

  function addBook(title, author){
    setBooks(prevBooks => (
      [
        ...prevBooks,
        {
          title: title,
          author: author,
          id: uuidv4()
        }
      ]
    ))
  }

  function removeBook(id){
    setBooks(prevBooks => (
      prevBooks.filter(book => book.id !== id)
    ))
  }

  return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;