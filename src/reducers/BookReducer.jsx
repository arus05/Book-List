import React from "react"
import {v4 as uuidv4} from "uuid"

function BookReducer(state, action){
  switch(action.type){
    case "ADD_BOOK":
      return ([
        ...state,
        {
          ...action.book,
          id: uuidv4(),
        }
      ])

    case "REMOVE_BOOK":
      return(
        state.filter(book => book.id !== action.id)
      )

    default:
      return state
  }
}

export default BookReducer