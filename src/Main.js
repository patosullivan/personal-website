import PropTypes from "prop-types"
import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"

const Main = props => (
  <main>
    <Card>
      <CardHeader>
        <CardTitle>{props.page}</CardTitle>
      </CardHeader>
      <CardBody>Card body content.</CardBody>
    </Card>
  </main>
)

Main.propTypes = {
  page: PropTypes.string
}

export default Main
