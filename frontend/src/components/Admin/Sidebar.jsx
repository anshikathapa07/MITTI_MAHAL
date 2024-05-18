import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillProduct } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/LOGOmm.png"
import { MdContactPage } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <aside className="flex fixed flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-danger-100 border-r rtl:border-r-0">
        <a href="#">
          <img
            className="w-auto h-10 lg:h-10"
            src={logo}
            alt=""
          />
        </a>
        <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-black-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 mt-3">
          <nav>
            <Link
              className="flex items-center px-4 py-2 text-black-700 hover:text-red-400 bg-white rounded-md "
              to="/Admin/Dashboard"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-3  text-black-700 bg-white rounded-md hover:text-red-400 dark:text-black"
              to="/Admin/ManageUser"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Users</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-3  text-black-700 bg-white rounded-md  hover:text-red-400 dark:text-black-"
              to="/Admin/ManageProduct"
            >
              <AiFillProduct />
              <span className="mx-4 font-medium">Products</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-3  text-black-700 bg-white rounded-md  hover:text-red-400 dark:text-black-"
              to=""
            >
        
              <MdContactPage />
              <span className="mx-4 font-medium">Contacts</span>
            </Link>

           
            <hr className="my-6 border-gray-200 dark:border-gray-600" />
            <a
              className="flex items-center px-4 py-2 mt-5 text-white bg-red-600  transition-colors duration-300 transform rounded-md  hover:bg-red-800 hover:text-white-700"
              href="#"
            >

              <FiLogOut  />
              <span className="flex items-center px-4 py-2  font-semibold  rounded-md">Logout</span>
            </a>
          </nav>
          <a href="#" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-9 w-9"
              src=""
              alt="Profile"
            />
            <span className="mx-2 font-medium text-black dark:text-">
              MITTI MAHAL
            </span>
          </a>
        </div>
      </aside>

    </>
  )
}

export default Sidebar