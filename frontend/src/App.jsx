import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Main/Navbar'
import Login from './components/Main/Login'
import Signup from './components/Main/Signup'
import { SnackbarProvider } from 'notistack'
import Contact from './components/Contact'
import AddProduct from './components/Admin/AddProduct'
import ProductListing from './components/Main/ProductListing'
import Feedback from './components/Feedback'
import Admin from './components/Admin/Index'
import Main from './components/Main/Index'
import ViewProduct from './components/Main/viewProduct'



const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
    
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
          


            <Route path='/Admin' element={<Admin />}>
              <Route path='AddProduct' element={<AddProduct />} />

            </Route>

            <Route path='/Main' element={<Main />}>
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='ProductListing' element={<ProductListing />} />
            <Route path='Feedback' element={<Feedback />} />
            <Route path='viewProduct/:id' element={<ViewProduct />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
