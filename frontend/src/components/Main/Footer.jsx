import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="relative bg-white-500 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-orange-700 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h3 className="text-3xl font-semibold" style={{ fontFamily:'serif'}}>
              Let's keep in touch!
            </h3>
            <h5 className="text-lg mt-0 mb-2 text-gray-900 blockquote">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
            <button
                className="bg-white text-blue-600 shadow-lg font-normal h-full w-30 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                
              >
             <FaTwitter />
             </button>
              <button
                className="bg-white text-pink-600 shadow-lg font-normal h-full w-30 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                
              >
              <FaInstagram />
                
              </button>
              <button
                className="bg-white text--400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FaFacebookF />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
               <IoLogoWhatsapp />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-black-600 text-lg font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/Home">Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/Main/About">About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/Main/Product">Product
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/Main/Contact">Contact
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black-600 text-lg font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/Main/Contact">Contact Us
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          
          </div>
        </div>
      </div>
    </footer>
  );
}