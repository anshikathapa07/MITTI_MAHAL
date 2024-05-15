import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Main/Navbar'
import Login from './components/Main/Login'
import Signup from './components/Main/Signup'
import { SnackbarProvider } from 'notistack'
import AddProduct from './components/Admin/AddProduct'
import ProductListing from './components/Main/ProductListing'
import Feedback from './components/Main/Feedback'
import Admin from './components/Admin/Index'
import Main from './components/Main/Index'
import ViewProduct from './components/Main/viewProduct'
import { AppProvider } from './components/Context/UserContext'
import { CartProvider } from './components/Context/CartContext'
import Contact from './components/Main/Contact'
import About from './components/Main/About'
import ForgetPassword from './components/ForgotPassword'
import ManageUser from './components/Admin/ManageUser'
import ManageProduct from './components/Admin/ManageProduct'



const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
    <AppProvider>
      <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/ForgotPassword' element={<ForgetPassword />} />
          


            <Route path='/Admin' element={<Admin />}>
            <Route path='AddProduct' element={<AddProduct />} />
            <Route path='ManageUser' element={<ManageUser/>} />
            <Route path='ManageProduct' element={<ManageProduct/>} />


            </Route>

            <Route path='/Main' element={<Main />}>
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='ProductListing' element={<ProductListing />} />
            <Route path='Feedback' element={<Feedback />} />
            <Route path='viewProduct/:id' element={<ViewProduct />} />
            <Route path='About' element={<About />} />

            </Route>

          </Routes>
          </CartProvider>
    </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
