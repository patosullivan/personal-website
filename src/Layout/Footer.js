import React from "react"

const year = new Date().getFullYear()

const Footer = () => (
  <footer className="bg-light border w-100 mx-0 px-2 py-1 mt-2 rounded">
    <small className="text-muted">
      &copy; {year} |{" "}
      <a
        className="text-muted"
        href="https://github.com/patosullivan/personal-website"
      >
        Check out the repo for this web app on GitHub
      </a>
      .
    </small>
  </footer>
)

export default Footer
