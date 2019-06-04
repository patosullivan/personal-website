import { Nav as RSNav, NavItem, NavLink } from "reactstrap"
import PropTypes from "prop-types"
import React from "react"
import { NavLink as RRNavLink } from "react-router-dom"
import { css } from "@emotion/core"

const navLinkStyle = css`
  @media (max-width: 375px) {
    padding: 0.5rem 0.5rem;
  }
`

const Nav = props => (
  <RSNav pills fill className="border py-0">
    {props.pages.map((page, index) => (
      <NavItem key={index}>
        <NavLink
          css={navLinkStyle}
          exact
          to={page == "About" ? "/" : `/${page}`}
          activeClassName="active"
          tag={RRNavLink}
        >
          {page}
        </NavLink>
      </NavItem>
    ))}
  </RSNav>
)

Nav.propTypes = {
  pages: PropTypes.array
}

export default Nav
