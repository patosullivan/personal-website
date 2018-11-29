import React from "react"
import { Jumbotron } from "reactstrap"

const jumboStyle = {
  backgroundImage: "url(./foggyMountains.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

const Banner = () => (
  <Jumbotron className="my-2 text-center" style={jumboStyle}>
    <h1 className="display-4 text-monospace">{"Patrick O'Sullivan"}</h1>
    <p className="lead text-monospace">Husband, Father, Front-End Developer.</p>
    <hr />
    <p>JavaScript (ES6+), React, Node, and Typescript.</p>
  </Jumbotron>
)

export default Banner
