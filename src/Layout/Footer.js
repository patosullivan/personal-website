import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const year = new Date().getFullYear()

const Footer = () => (
  <footer className="bg-light border w-100 mx-0 px-2 py-0 mt-2 rounded">
    <small className="text-muted">
      &copy; {year} |{" "}
      <a
        className="text-muted"
        href="https://github.com/patosullivan/personal-website"
      >
        Check out the repo for this web app on{" "}
        <FontAwesomeIcon icon={faGithub} />
      </a>
      .
    </small>
  </footer>
)

export default Footer
