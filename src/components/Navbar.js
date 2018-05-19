import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'


const Navbar = () => (



  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="AlienBrew" style={{ width: '90px' }} />
          </figure>
        </Link>

        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        </a>
      </div>
      <span className="nav-toggle" onClick="document.querySelector('.navbar-menu').classList.toggle('is-active');"></span>
      <div className="navbar-menu" id="navMenu">
      <div className="navbar-start">
      <Link className="navbar-item" to="/bryg">
        Bryg
      </Link>
      <Link className="navbar-item" to="/omkring">
        Omkring
      </Link>
      </div>
      <div className="navbar-end">
      </div>
      </div>
    </div>
  </nav>


);

export default Navbar
