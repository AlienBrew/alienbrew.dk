import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const toggleNav = () => {
  this.setState(prevState => {
    return ({
      isActive: !prevState.isActive
    });
  })
};

const state = () =>{
  isActive: false
};

const Navbar = () => (


  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="AlienBrew" style={{ width: '90px' }} />
          </figure>
        </Link>
        <button className="button navbar-burger" onClick={this.toggleNav}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="navbar-menu">
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
