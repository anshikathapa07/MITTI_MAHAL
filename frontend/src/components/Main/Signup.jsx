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
  cpass: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'both passwords  must matched')
})

const Signup = () => {
  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpass: '',


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
      <div className=" h-screen flex items-center justify-center " style={{ backgroundImage: "url('https://wallpaperswide.com/download/aero_light_colors-wallpaper-1920x1200.jpg')", backgroundSize: "cover",backgroundRepeat:'no-repeat' }}>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-3 flex items-center justify-center ">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
              <p className="mt-2 text-gray-500">Sign in below to access your account</p>
            </div>
            <div className="mt-8">
              <form onSubmit={signupForm.handleSubmit}>
                <div className="relative mt-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name} 
              />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Name
                  </label><span style={{color: 'brown', fontSize: '10'}}>{signupForm.touched.name && signupForm.errors.name}</span>
                </div>
                <div className="relative mt-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email} 
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Email Address
                  </label><span style={{color: 'brown', fontSize: '10'}}>{signupForm.touched.email && signupForm.errors.email}</span>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password} 
                />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                 >
                    Password
                  </label><span style={{color: 'brown', fontSize: '10'}}>{signupForm.touched.password && signupForm.errors.password}</span>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name="cpass"
                    id="cpass"
                    placeholder=" Confirm Password"
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.cpass} 
                  />
                  <label
                    htmlFor="cpass"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Confirm Password
                  </label><span style={{color: 'brown', fontSize: '10'}}>{signupForm.touched.cpass && signupForm.errors.cpass}</span>
                </div>
                <div className="ml-3 text-sm mt-3 mb-3 ">
                  <input type='checkbox' name='terms' id='terms '></input>
                  <label
                    htmlFor="terms"
                    className="font-dark text-dark-500 dark:text-dark-300 text-muted"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Signup
