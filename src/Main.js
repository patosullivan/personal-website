import PropTypes from "prop-types"
import React from "react"

const Main = props => <main>{props.page} stuff.</main>

Main.propTypes = {
  page: PropTypes.string
}

export default Main
