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

const Nav = ({ pages }) => (
  <RSNav pills fill className="border py-0">
    {pages.map((page, index) => (
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
    <NavItem>
      <NavLink href="https://osullivanio.notion.site/osullivanio/Patrick-O-Sullivan-Resume-4904a0d812fa4353984d1faea64fd546">
        My Resume
      </NavLink>
    </NavItem>
  </RSNav>
)

Nav.propTypes = {
  pages: PropTypes.array,
}

export default Nav
