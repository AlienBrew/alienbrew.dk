import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="AlienBrew" />
    <Navbar />
    <div>{children()}</div>
  </div>
  <script>
  function hamburgerHelper(){
    document.querySelector('.navbar-burger').addEventListener("click", toggleNav);

    function toggleNav() {
            var nav = document.querySelector('.navbar-menu');
            if(nav.className == "navbar-menu") {
                nav.className = "navbar-menu is-active";
            } else {
                nav.className = "navbar-menu";
            }
    }
}
</script>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
