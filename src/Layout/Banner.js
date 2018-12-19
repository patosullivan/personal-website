import React from "react"
import { Jumbotron } from "reactstrap"

const jumboStyle = {
  backgroundImage: "url(./foggyMountains.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "1rem 1rem",
  marginBottom: "0rem"
}

const Banner = () => (
  <Jumbotron className="my-2 text-center" css={jumboStyle}>
    <h1 className="display-4 text-monospace">{"Patrick O'Sullivan"}</h1>
    <p className="lead text-monospace">Husband, Father, Front-End Developer.</p>
    <hr />
    <p>JavaScript (ES6+), React, and Node.</p>
  </Jumbotron>
)

export default Banner
