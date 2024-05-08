import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters'),
})

const Login = () => {
  // step 1: formik initialization
  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('login successful', { variant: 'success' })
      } else {
        enqueueSnackbar('login failed', { variant: 'error' })
      }
    },

    validationSchema: LoginSchema
  })

  return (
    <div>
      <section className="vh-100" style={{backgroundImage:"url(https://wallpapers.com/images/high/light-brown-background-ze8u67khwccsklg3.webp)",backgroundSize:"cover" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "0.5rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://img.freepik.com/premium-photo/illustration-woman-dress-standing-shopping-cart_988987-18644.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={LoginForm.handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          login into your account
                        </h5>
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-lg"
                            onChange={LoginForm.handleChange}
                            value={LoginForm.values.email}
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label><span style={{color: 'brown', fontSize: '10'}}>{LoginForm.touched.email && LoginForm.errors.email}</span>
                        </div>
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            onChange={LoginForm.handleChange}
                            value={LoginForm.values.password}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label><span style={{color: 'brown', fontSize: '10'}}>{LoginForm.touched.password&& LoginForm.errors.password}</span>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="/signup" style={{ color: "#393f81" }}>
                            signup here
                          </a>
                        </p>
                     </form>
                    </div>
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

export default Login