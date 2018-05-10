import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="AlienBrew" style={{ width: '50%', hight: '50%' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">

      </div>
    </div>
  </nav>
)

export default Navbar
