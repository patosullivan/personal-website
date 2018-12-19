import React from "react"
import { Jumbotron } from "reactstrap"
import { css } from "@emotion/core"

const jumboStyle = css`
  background-image: url(./foggyMountains.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem 1rem;
  marginbottom: 0rem;
`

const nameStyle = css`
  @media (device-width: 320px), (device-width: 375px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
`

const Banner = () => (
  <Jumbotron className="my-2 text-center" css={jumboStyle}>
    <h1 css={nameStyle} className="display-4 text-monospace">
      {"Patrick O'Sullivan"}
    </h1>
    <p className="lead text-monospace">Husband, Father, Front-End Developer.</p>
    <hr />
    <p>JavaScript (ES6+), React, and Node.</p>
  </Jumbotron>
)

export default Banner
