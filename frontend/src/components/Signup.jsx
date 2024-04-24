import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters'),
})

const Signup = () => {
  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Signup successful', { variant: 'success' })
      } else {
        enqueueSnackbar('Signup failed', { variant: 'error' })
      }
    },

    validationSchema: SignupSchema
  })
  return (
    <div>
      <section
        className="vh-90 bg-image"
        style={{
          backgroundImage:'url(https://img.freepik.com/premium-vector/vector-background-image-pastel-colors-similarity-flying-fabric-current-creamy-paste_214228-76.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className="mask d-flex align-items-center h-75 ">
          <div className="container h-75">
            <div className="row d-flex justify-content-center align-items-center h-75">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h1 className="text-uppercase text-center text-black  mb-2 mt-3">
                      Signup
                    </h1>
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    {/* step2: handling when submit */}
                    <form onSubmit = {signupForm.handleSubmit}>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                        />
                        <span style={{ color: 'black', fontSize: '10px' }}>{signupForm.touched.name && signupForm.errors.name}</span>
                        <label className="form-label" htmlFor="name" style={{}}>
                         Your Name
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                        />
                        <span style={{ color:'red', fontSize:'10' }}>{signupForm.touched.email && signupForm.errors.email}</span>
                          <label className="form-label" htmlFor="email" style={{color: 'solid black', fontFamily:'sans-serif',fontSize: '40'}}>
                            Your Email
                          </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                        />
                        <span style={{ color:'red', fontSize: '10' }}>{signupForm.touched.password && signupForm.errors.password}</span>
                          <label className="form-label" htmlFor="password" style={{}}>
                            <span>{ }</span>
                            Password
                          </label>
                      </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="aggrement"
                        />
                        <label className="form-check-label" htmlFor="aggrement">
                          I agree all statements in{" "}

                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-danger btn-lg btn-block text-body"
                          id='submit'
                        >
                          Signup
                        </button>
                      </div>
                      <p className="text-center text-muted mt-3 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup