import React from 'react'
import Navbar from './Main/Navbar'
import img1  from '../../Image/img1m.jpg'
import img2  from '../../Image/img2.jpg'
import img3  from '../../Image/img3.jpg'
import img4  from '../../Image/img4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './Main/Footer';
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md"
import { FcCustomerSupport } from "react-icons/fc";
import { RiSecurePaymentLine } from "react-icons/ri";
const Home = () => {
  return (
    <>

      <Navbar />
      <main>

        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "80vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750/v1/classpop/blog/earthenware_61ce17c4e7ed3.jpg')"
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className=" text-white text-orange-900 font-bold text-5xl" style={{fontFamily:"serif"}}>
                  Crafted with Earth's Elegance
                  </h1>
                  <p className="mt-4 text-xl text-gray-300 font-semibold"style={{fontFamily:"serif"}}>
                  Welcome to our world of mud-made marvels, <br />where nature meets craftsmanship in every product.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >

          </div>
        </div>

        <section className="pb-20 bg-white-500 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-36 h-36 mb-5">
                      <img src="https://i.pinimg.com/564x/12/cd/1d/12cd1de5eea2cf43a519aa7a85eab61a.jpg" alt="" />
                    </div>
                    <h6 className="text-2xl font-semibold font-serif text-orange-900 ">Showpieces</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Transform your home into a gallery with our exquisite clay showpieces.
                    </p>
                    <Link to='/Main/ProductListing'>
                    <button className="bg-orange-900 text-white py-1 px-3 rounded font-serif">Explore</button></Link>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-36 h-36 mb-5 ">
                      <img src="https://i.pinimg.com/564x/4c/9b/6b/4c9b6b39995a16d2a305f5b7454e16c8.jpg" alt="" />
                    </div>
                    <h6 className="text-2xl text-orange-900 font-serif font-semibold">
                      Water Containers
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Quench Your Thirst Responsibly: Carry Our Water Bottles.
                    </p>
                    <Link to='/Main/ProductListing'>
                    <button className="bg-orange-900 text-white py-1 px-3 rounded font-serif">Explore</button></Link>

                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-36 h-36 mb-5 ">
                      <img src="https://i.pinimg.com/736x/51/f7/d6/51f7d677d5da46cd141a7f07f3595fde.jpg" alt="" />
                    </div>
                    <h6 className="text-2xl font-serif text-orange-900 font-semibold">
                      Utensils
                    </h6>
                    <p className="mt-2 mb-4 text-black ">
                      Tools for Tasteful Creations: Discover Our Utensil Collection
                    </p>
                    <Link to='/Main/ProductListing'>
                    <button className="bg-orange-900 text-white py-1 px-3 rounded font-serif">Explore</button></Link>

                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                <h3 className="text-3xl text-orange-900 font-serif mb-2  font-semibold leading-normal">

                  Embrace Clay Artistry at Mittimahal

                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Mittimahal is like a magical place where skilled artists use their hands to shape and create beautiful items from clay. It&apos;s not just about making things; it&apos;s about sharing stories, traditions, and a love for creating with our hands. Each piece made here is like a work of art, showing the beauty of handmade things. Come and explore Mittimahal with us, where every piece tells a story of craftsmanship and the joy of making things from clay
                </p>

              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-900">
                  <div className="container">
                    <div className=" m-5 bg-white shadow border-none bg-opacity-25">
                      <div className="">

                        <div className=" ">
                          <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}

                            modules={[Autoplay]}
                            className="mySwiper   pt-2 "
                          >
                            <SwiperSlide>
                              <img src="https://cla.umn.edu/sites/cla.umn.edu/files/ceramics_classes_2.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_640.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://c0.wallpaperflare.com/preview/311/294/472/man-making-pot-near-wall-in-house.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gopi3.width-1000.format-webp.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://images.pexels.com/photos/7155435/pexels-photo-7155435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://www.shutterstock.com/image-photo/skilled-hands-female-potter-shaping-600nw-2160235079.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="https://media.istockphoto.com/id/1152196565/photo/man-painting-handmade-pottery-at-ceramic-workshop.jpg?s=612x612&w=0&k=20&c=9fRfnBuyZUJsLzV_ejdFjCr1UBiwsHgK2-AEC9qrDPY=" alt="" />
                            </SwiperSlide>

                          </Swiper>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://img.freepik.com/free-photo/female-sculptor-working-with-clay-studio_23-2149986281.jpg"
                />
              </div>
              <div className="w-full grid grid-cols-3 md:w-5/12 ml-auto mr-auto px-4">
              <img className='w-48' src="https://i.pinimg.com/564x/87/8d/18/878d1811413e3cce5985f1992b9c13a3.jpg" alt="" />

                <img className='w-48 ' src="https://i.pinimg.com/736x/d8/16/d3/d816d3595e3cd197aef003be022f699d.jpg" alt="" />
                <img className='w-56' src="https://i.pinimg.com/564x/80/01/ee/8001ee7ff750a11da95b80eac444c11f.jpg" alt="" />
               
                <img className='w-56 ' src="https://i.pinimg.com/564x/86/bf/4d/86bf4d9659cd32ee1f1b7efbae4d4372.jpg" alt="" />
              <img className='w-48' src="https://i.pinimg.com/736x/75/79/75/757975cf0de7956448c9c54c2cd1c45b.jpg" alt="" />
                <img className='w-48' src="https://i.pinimg.com/564x/a3/a6/29/a3a62902f46548f0b8e5f5b354e00dab.jpg" alt="" />
              <img className='w-48' src="https://i.pinimg.com/564x/2a/a1/d5/2aa1d52af7cfaf37f3ba723373ddbc90.jpg" alt="" />
                <img className='w-56' src="https://i.pinimg.com/564x/86/bf/4d/86bf4d9659cd32ee1f1b7efbae4d4372.jpg" alt="" />
              <img className='w-48' src="https://i.pinimg.com/736x/75/79/75/757975cf0de7956448c9c54c2cd1c45b.jpg" alt="" />
               
              
                {/* <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    A growing company
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold font-serif text-orange-900">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-black-600">
                “We value our customers above all else.”
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img1}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Muskaan Thapa
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Advocate
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full p-2 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                       <FaTwitter />
                      </button>
                      <button
                        className="bg-pink-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                       <FaInstagram /> 
                      </button>
                      <button
                        className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaFacebookF />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img2}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Kriti Joshi
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      React Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaInstagram />  
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaFacebookF /> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-50 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img4}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Avantika Singh
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaInstagram />  
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaTwitter />
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                         <FaFacebookF />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img3}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                       Saloni Singh
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaInstagram />  
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                        type="button"
                      >
                        <FaFacebookF />
                      </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-white-900">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-black font-serif">
                  Our Features
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-black-900 p-3 w-12 h-12 shadow-lg  rounded-full bg-white inline-flex items-center justify-center">
                <MdOutlineLocalShipping />
                </div>
                <h6 className="text-xl mt-5 font-bold text-orange-900">
                  All India Shipping
                </h6>
                <p className="mt-2 mb-4 text-black">
                  Get your products at your doorsteps.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-black-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FcCustomerSupport />
                </div>
                <h5 className="text-xl mt-5 font-bold text-orange-900">
                  Customer Support
                </h5>
                <p className="mt-2 mb-4 text-black">
                  Support 24/7
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <RiSecurePaymentLine />
                </div>
                <h5 className="text-xl mt-5 font-bold text-orange-900">
                  Payment
                </h5>
                <p className="mt-2 mb-4 text-black">
                  Secure payment
                </p>
              </div>
            </div>
          </div>
        </section>
        <form>
        <section className="relative block py-24 lg:pt-0 bg-white-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-bold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-black">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </form>
      </main>
<Footer />
    </>
  )
}

export default Home
            