import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { css } from "@emotion/core"

const year = new Date().getFullYear()

const footerTextStyle = css`
  @media (device-width: 320px) {
    font-size: 70%;
  }
`

const Footer = () => (
  <footer className="bg-light border w-100 mx-0 px-2 py-0 mt-2">
    <small css={footerTextStyle} className="text-muted">
      &copy; {year} |{" "}
      <a
        className="text-muted"
        href="https://github.com/patosullivan/personal-website"
      >
        Look at the repo for this site on{" "}
        <FontAwesomeIcon icon={faGithub} />
      </a>
      .
    </small>
  </footer>
)

export default Footer
