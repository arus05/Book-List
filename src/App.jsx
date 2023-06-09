import { useState, useContext } from 'react'
import React from "react"
import Header from "./components/Header"
import BookList from './components/BookList'
import BookForm from './components/BookForm'

import BookContextProvider from "./contexts/BookContext"

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Header />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  )
}

export default App
