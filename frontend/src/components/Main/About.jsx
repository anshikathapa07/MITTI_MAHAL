import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <section className=" h-full mt-2 "style={{ backgroundColor: '#edcfc2' }}>
        <div className="container h-full w-full py-20 px-4 sm:px-6 lg:px-8  " style={{ backgroundColor: '#edcfc2' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h1 className="text-3xl font-extrabold text-black-900 sm:text-4xl font-serif  align-text-center">
                About Us
              </h1>
              <p className="mt-4 text-black-600 text-lg align-text-center">
                At Mitti Mahal, we are passionate about creating beautiful and functional clay products.India is well known for its tradition and so is its tradition of cooking with earthenware. It’s an age-old concept that has deserted with time. This golden concept was then washed over by modernization as we moved to the stainless steel or bone china or melamine era.</p>
              <p className="mt-4 text-black-600 text-lg align-text-center">One can get a rare antique of an earthen pot in a few homes these days, the reason being its natural benefits. Earthenware has tremendous health benefits. Cooking food with it embarks nutritional value of the clay to the food. The porous material of clay helps water seep through it, letting you enjoy the mildly cool water. Not only this, but the mineral composition and porous nature of clay pots and other clay products also accentuate the flavour of the food we eat.</p>
              <div className="mt-8">
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium align-text-center ">
                  Learn more about us
                  <span className="ml-6 ">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661683887049-69e8ae0a6c92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us Image"
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>
   
      </section>

     </div>

  )
}
export default About