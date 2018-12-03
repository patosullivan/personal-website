import About from "../Content/About"
import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody } from "reactstrap"
import Contact from "../Content/Contact"
import Skills from "../Content/Skills/Skills"
import Demos from "../Content/Demos/Demos"

const Main = props => {
  let pageContent = "About"
  switch (props.page) {
    case "About":
      pageContent = <About />
      break
    case "Contact":
      pageContent = <Contact />
      break
    case "Skills":
      pageContent = <Skills />
      break
    case "Demos":
      pageContent = <Demos />
      break
    default:
      pageContent = <About />
      break
  }
  return (
    <main className="py-2">
      <Card>
        <CardBody>{pageContent}</CardBody>
      </Card>
    </main>
  )
}

Main.propTypes = {
  page: PropTypes.string
}

export default Main
