import About from "../Content/About"
import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import Contact from "../Content/Contact"

const Main = props => {
  let pageContent = "About"
  switch (props.page) {
    case "About":
      pageContent = <About />
      break
    case "Contact":
      pageContent = <Contact />
      break
    default:
      pageContent = <About />
      break
  }
  return (
    <main className="py-2">
      <Card>
        <CardHeader>
          <CardTitle>{props.page}</CardTitle>
        </CardHeader>
        <CardBody>{pageContent}</CardBody>
      </Card>
    </main>
  )
}

Main.propTypes = {
  page: PropTypes.string
}

export default Main
