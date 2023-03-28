import React, { useReducer, createContext, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import BookReducer from "../reducers/BookReducer"

export const BookContext = createContext();

function BookContextProvider(props){

  const [books, dispatch] = useReducer(
    BookReducer,
    [
      {
        title: "The Name of The Wind", author: "Patrick Rothfuss", id: 1
      },
      {
        title: "Shadow and Bone", author: "Leigh Bardugo", id: 2
      }
    ],
    (initialArg) => {
      const storageData = localStorage.getItem("books")
      if(storageData){
        return JSON.parse(storageData)
      }
      else{
        return initialArg
      }
    }
  )

  React.useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  return(
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;