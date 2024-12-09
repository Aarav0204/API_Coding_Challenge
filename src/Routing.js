import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import SignIn from './components/Signin'
import SignUp from './components/Signup'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/updatebook" element={<UpdateBook />} />
        <Route path="/deletebook" element={<DeleteBook />} />

    </Routes>
  )
}

export default Routing