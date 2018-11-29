import React from "react"

const year = new Date().getFullYear()

const Footer = () => (
  <footer className="bg-light border w-100 mx-0 px-2 py-1 mt-2 rounded">
    <small className="text-muted">&copy; {year}</small>
  </footer>
)

export default Footer
