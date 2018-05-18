import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
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
        <button className="button navbar-burger" >
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
  <script>
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
);

export default Navbar
