import React from "react"
import { Jumbotron } from "reactstrap"
import { css } from "@emotion/core"
import foggyMountains from "./foggyMountains.jpg"

const jumboStyle = css`
  background-image: url("./imgs/foggyMountains-1140.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem 1rem;
  margin-bottom: 0rem;
  @media (max-width: 375px) {
    background-image: url("./imgs/foggyMountains-345.jpg");
  }
  @media (max-width: 425px) {
    background-image: url("./imgs/foggyMountains-395.jpg");
  }
`

const nameStyle = css`
  @media (max-width: 375px) {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`

const summaryStyle = css`
  @media (max-width: 375px) and (min-width: 360px) {
    font-size: 1.5rem;
    letter-spacing: -1px;
  }
  @media (max-width: 414px) and (min-width: 411px) {
    font-size: 1.6rem;
    letter-spacing: -1px;
  }
`

const secondarySummaryStyle = css`
  @media (max-width: 320px) {
    font-size: 0.95rem;
    letter-spacing: -1px;
  }
`

const Banner = () => (
  <Jumbotron className="my-2 text-center" css={jumboStyle}>
    <h1 css={nameStyle} className="display-4 text-monospace">
      {"Patrick O'Sullivan"}
    </h1>
    <p css={summaryStyle} className="lead text-monospace">
      Husband, Father, Developer.
    </p>
    <hr />
    <p css={secondarySummaryStyle}>
      JavaScript (ES6+), TypeScript, React, and Node.
    </p>
  </Jumbotron>
)

export default Banner
