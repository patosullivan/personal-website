import PropTypes from "prop-types"
import React from "react"

const Nav = props => (
  <nav>
    <ul>
      {props.pages.map((page, index) => {
        return (
          <li key={index}>
            <a href="#" onClick={() => props.setPage(page)}>
              {page}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
)

Nav.propTypes = {
  pages: PropTypes.array,
  setPage: PropTypes.func
}

export default Nav
