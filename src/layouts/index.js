import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import OwnJS from '../components/OwnJS'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="AlienBrew" />
    <OwnJS />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
