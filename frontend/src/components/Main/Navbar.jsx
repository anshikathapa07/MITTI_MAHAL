import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from "../../assets/LOGOmm.png"

const Navbar = () => {
  return (
    <div>
      <>
  {/* component */}
  <nav className="bg-white-200  shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div>
     <a className="text-2xl font-bold leading-none" href="#">
     <img className='w-24 h-12 ' src={logo} alt="" />
    </a>
          
      </div>
      <div className="text-black-500 order-2 w-full md:w-auto md:order-2">
        <ul className="flex font-semibold justify-between">
          {/* Active Link = text-black-500
          Inactive Link = hover:text-indigo-500 */}
          <li className="md:px-4 md:py-2 text-orange-700">
            <Link to="/Home">Home</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-orange-700">
            <Link to="/Main/ProductListing">Product</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-orange-700">
            <Link to="/Main/About">About</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-orange-700">
            <Link to="/Main/Contact">Contact</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-orange-700">
            <Link to="/Main/Cart">
              cart
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="order-3 md:order-3">
        <button className="px-4 py-2 bg-orange-700 hover:bg-yellow-700 text--50 text-white rounded-lg  rounded-xl flex items-center gap-2">
          {/* Heroicons - Login Solid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
              
            />
          </svg>
          <Link to="/Main/Login">Login</Link>
        </button>
      </div>
    </div>
  </nav>
</>

    </div>
  )
}

export default Navbar