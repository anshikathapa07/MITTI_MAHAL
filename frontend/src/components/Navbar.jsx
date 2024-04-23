import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/Home">
        Home<span className="sr-only"></span>
      </Link>
      <Link className="nav-item nav-link" to="/Login">
        Login
      </Link>
      <Link className="nav-item nav-link" to="/Signup">
        Signup
      </Link>
      <Link className="nav-item nav-link " to="/Contact">
        Contact
      </Link>
      <Link className="nav-item nav-link" to="/AddProduct">
        Product
      </Link>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar