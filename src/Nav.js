import { Nav as RSNav, NavItem, NavLink } from "reactstrap"
import PropTypes from "prop-types"
import React from "react"

const Nav = props => (
  <RSNav pills>
    {props.pages.map((page, index) => (
      <NavItem key={index}>
        <NavLink href="#" onClick={() => props.setPage(page)}>
          {page}
        </NavLink>
      </NavItem>
    ))}
  </RSNav>
)

Nav.propTypes = {
  pages: PropTypes.array,
  setPage: PropTypes.func
}

export default Nav
