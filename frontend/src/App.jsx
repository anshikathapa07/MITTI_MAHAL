import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

import Login from './components/Login'
import Signup from './components/Signup'
import{SnackbarProvider} from 'notistack'
import Contact from './components/Contact'
import AddProduct from './components/AddProduct'



const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/AddProduct' element={<AddProduct />}/>
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
