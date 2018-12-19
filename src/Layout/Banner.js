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
  @media (max-width: 375px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
`

const summaryStyle = css`
  @media (max-width: 375px) and (min-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 414px) and (min-width: 411px) {
    font-size: 1.6rem;
  }
`

const secondarySummaryStyle = css`
  @media (max-width: 320px) {
    font-size: 0.95rem;
  }
`

const Banner = () => (
  <Jumbotron className="my-2 text-center" css={jumboStyle}>
    <h1 css={nameStyle} className="display-4 text-monospace">
      {"Patrick O'Sullivan"}
    </h1>
    <p css={summaryStyle} className="lead text-monospace">
      Husband, Father, Front-End Developer.
    </p>
    <hr />
    <p css={secondarySummaryStyle}>JavaScript (ES6+), React, and Node.</p>
  </Jumbotron>
)

export default Banner
