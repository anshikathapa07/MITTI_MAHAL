import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const contactSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  message: Yup.string()
    .required('Message is required')
})

const Contact = () => {
  // step 1: formik initialization
  const ContactForm = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Submit successful', { variant: 'success' })
      } else {
        enqueueSnackbar('Submit failed', { variant: 'error' })
      }
    },

    validationSchema: contactSchema
  })
  return (
    <div>
      <section className="text-dark-600 body-font bg-white  h-screen flex items-center justify-center " style={{ backgroundImage: "url(https://wallpapers.com/images/high/light-brown-background-ze8u67khwccsklg3.webp)", backgroundSize: "cover" }}>
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full">
            <h1 className="text-3xl text-gray-800 sm:text-3xl font-bold title-font mb-4">
              Get in touch with us
            </h1>
            <p className="leading-relaxed text-xl text-gray-900">
              We're here to assist you! If you have any questions or need assistance,
              please feel free to reach out to us.
              <br />
              <br />
              You can also email us at
              <a
                href=": mittimahal01@gmail.com"
                className="font-semibold border-b-4 border-red-400 p-2"
              >
                mittimahal01@gmail.com
              </a>
              < br />
              < br />
            </p>
            <p className="leading-relaxed text-xl text-gray-900 mt-8">
              Connect with us on social media:
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
              <a
                className="text-gray-500 hover:text-gray-900"
                target="_blank"
                href="https://twitter.com/example"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-gray-900"
                href="https://www.instagram.com/example/"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </span>
          </div>
          <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Contact Us
            </h1>
            <form onSubmit={ContactForm.handleSubmit}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="fullname"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label><span style={{color: 'red', fontSize: '10'}}>{ContactForm.touched.fullname && ContactForm.errors.fullname}</span>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    onChange={ContactForm.handleChange}
                    value={ContactForm.values.fullname}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label><span style={{color: 'red', fontSize: '10'}}>{ContactForm.touched.email && ContactForm.errors.email}</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    onChange={ContactForm.handleChange}
                    value={ContactForm.values.email}
                />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Message
                  </label><span style={{color: 'red', fontSize: '10'}}>{ContactForm.touched.message && ContactForm.errors.message}</span>
                  <textarea
                    type='text'
                    id="message"
                    name="message"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                    defaultValue={""}
                    onChange={ContactForm.handleChange}
                    value={ContactForm.values.message}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Contact