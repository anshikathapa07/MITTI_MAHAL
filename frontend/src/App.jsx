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
import Dashboard from './components/Admin/Dashboard'
import Cart from './components/Main/Cart'
import ManagerContact from './components/Admin/ManageContact'
import AdminAuth from './AdminAuth'
import UserAuth from './UserAuth'
import Checkout from './components/User/Checkout'
import Order from './components/User/Order'
import ThankYou from './components/User/Thankyou'






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
                <Route path='/AdminAuth' element={<AdminAuth />} />
                <Route path='/ForgotPassword' element={<ForgetPassword />} />
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='/Order' element={<Order />} />
                <Route path='/thankyou' element={<ThankYou />} />



                <Route path='/Admin' element={<AdminAuth> <Admin /> </AdminAuth>}>
                  <Route path='AddProduct' element={<AddProduct />} />
                  <Route path='ManageUser' element={<ManageUser />} />
                  <Route path='ManageProduct' element={<ManageProduct />} />
                  <Route path='ManageContact' element={<ManagerContact />} />
                  <Route path='Dashboard' element={<Dashboard />} />


                </Route>

                <Route path='/Main' element={<Main />}>
                  <Route path='Login' element={<Login />} />
                  <Route path='Signup' element={<Signup />} />
                  <Route path='Contact' element={<Contact />} />
                  <Route path='ProductListing' element={<ProductListing />} />
                  <Route path='Feedback' element={<Feedback />} />
                  <Route path='viewProduct/:id' element={<UserAuth> <ViewProduct /></UserAuth>} />
                  <Route path='About' element={<About />} />
                  <Route path='Cart' element={<Cart />} />
                  <Route path='Checkout' element={<Checkout />} />
                  <Route path='Order' element={<Order />} />

                </Route>
                {/* <Route path='/User' element={<User />}>
                  <Route path='Checkout' element={<Checkout />} />
                  <Route path='Order' element={<OrderHistory />} />
                  <Route path='PaymentGateway' element={<OrderHistory />} />
                </Route> */}


              </Routes>
            </CartProvider>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
