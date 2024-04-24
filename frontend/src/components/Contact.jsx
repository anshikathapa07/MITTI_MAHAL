import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const ContactSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  phone: Yup.string()
    .required('Phone number  is required'),
    // .min(8, ' must be at least 8 characters')
    // .max(15, 'Password must be at most 15 characters'),
  message: Yup.string()
  .required('Message is required'),
})
const Contact = () => {
  // step 1: formik initialization
  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message:'',
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
        enqueueSnackbar(' Submit successful', { variant: 'success' })
      } else { 
        enqueueSnackbar('Submit failed', { variant: 'error' })
      }
    },

    validationSchema: ContactSchema
  })

return (
    <div>
      <section className=" py-3 py-md-5" style={{ backgroundImage:'url(https://png.pngtree.com/background/20210717/original/pngtree-assisted-birth-center-minimalist-picture-image_1447468.jpg)'}}>
        <div className="container h-80">
             <div className="row justify-content-md-center h-80">
              <div className=" col-md-6 col-lg-5  col-xl-6">
                <h2 className="mb-3 display-5 text-center text-primary "style={{fontSize:'80px' , fontStyle:'italic'}}>Contact Us</h2>
                <p className="text-secondary mb-3 text-center">Get In Touch</p>
                <hr className="w-50 mx-auto mb-3 mb-xl-9 border-dark-subtle" />
              </div>
            </div>
        </div>
        <div className="container">
          <div className="card-body ">
            <div className="row justify-content-lg-center">
              <div className="col-md-12 col-lg-9">
                <div className="bg-transparent border rounded shadow-sm overflow-hidden">
                  <form onSubmit = {contactForm.handleSubmit}>
                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                      <div className="col-12">
                        <label htmlFor="fullname" className="form-label">
                          Full Name <span className="text-danger">{contactForm.touched.fullname && contactForm.errors.name}</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="fullname"
                          defaultValue=""
                          required=""
                          onChange={contactForm.handleChange}
                          value={contactForm.values.fullname}

                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">{contactForm.touched.email&& contactForm.errors.email}</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            defaultValue=""
                            required=""
                            onChange={contactForm.handleChange}
                          value={contactForm.values.email}

                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number<span className="text-danger">{contactForm.touched.phone && contactForm.errors.phone}</span>
                        </label>

                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-telephone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            defaultValue=""
                            onChange={contactForm.handleChange}
                          value={contactForm.values.phone}

                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">{contactForm.touched.message && contactForm.errors.message}</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={3}
                          required=""
                          defaultValue={""}
                          onChange={contactForm.handleChange}
                          value={contactForm.values.message}

                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-lg" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Contact