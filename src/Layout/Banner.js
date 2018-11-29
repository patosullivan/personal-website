import React from "react"
import { Jumbotron } from "reactstrap"

const Banner = () => (
  <Jumbotron className="mb-2">
    <h1 className="display-4 text-monospace">{"Patrick O'Sullivan"}</h1>
    <p className="lead text-monospace">Front-End Developer.</p>
    <hr />
    <p>Specializing in JavaScript (ES6+), React, Node, and Typescript.</p>
  </Jumbotron>
)

export default Banner
