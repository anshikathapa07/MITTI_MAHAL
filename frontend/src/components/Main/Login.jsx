import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import { Link, useNavigate } from 'react-router-dom'
import useAppContext from '../Context/UserContext';


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
  const { setCurrentUser, setLoggedIn } = useAppContext();
  const navigate = useNavigate();
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
      console.log(res.status);
      if (res.status === 200) {
        setLoggedIn(true);
        const data = await res.json();
        console.log(data);
        setCurrentUser(data);
        sessionStorage.setItem('isloggedin', true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/Admin/Dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
          enqueueSnackbar("Login Successfully", { variant: "success" })
          navigate("/Main/ProductListing")
        }
      } else {
        enqueueSnackbar("somthing went wrong", { variant: "warning" })
      }
    }
  });
  return (
    <form onSubmit={LoginForm.handleSubmit}>
      {/* https://play.tailwindcss.com/MIwj5Sp9pw */}
      <div className="py-16 bg-white-400 " style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gold-gradient-abstract-design-background-wave_343694-3947.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        <div className="flex  rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl bg-white" >
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/premium-photo/illustration-woman-dress-standing-shopping-cart_988987-18644.jpg")'
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-dark-700 text-center">
              Login here!
            </h1>
            <p className="text-xl text-dark-600 text-center mt-2">Welcome back!</p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-yellow-400"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a href="#" className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="mt-4">
              <label className="block text-dark text-lg font-bold mb-2">
                Email Address
              </label><span style={{ color: 'red', fontSize: '10' }}>{LoginForm.touched.email && LoginForm.errors.email}</span>
              <input
                className="bg-white-200 text-gray-700 focus:outline-none focus:shadow-outline border border-black-500 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                id="email"
                value={LoginForm.values.email}
                onChange={LoginForm.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-dark-700 text-lg font-bold mb-2">
                  Password
                </label><span style={{ color: 'red', fontSize: '10' }}>{LoginForm.touched.paasword && LoginForm.errors.password}</span>
                <Link to="/ForgotPassword" className="text-sm text-blue-500">
                  Forget Password?
                </Link>
              </div>
              <input
                className="bg-white-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                id="password"
                value={LoginForm.values.password}
                onChange={LoginForm.handleChange}
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-900 text-white font-bold py-2 px-4 w-full rounded hover:bg-yellow-400"
                type="submit"
                id="submit"
              >

                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <a href="/Main/Signup" className="text-sm text-black-500 uppercase">
                or sign up
              </a>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}
export default Login