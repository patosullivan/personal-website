import family from "./family.jpg"
import React from "react"
import {
  CardDeck,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap"
import { css } from "@emotion/core"

const aboutCardStyle = css`
  @media (max-width: 375px) {
    padding: 1rem;
  }
`

const About = () => (
  <Row className="py-0">
    <CardDeck>
      <Card>
        <picture className="card-img">
          <source srcSet="./imgs/family-268.jpg" media="(max-width: 308px)" />
          <source srcSet="./imgs/family-323.jpg" media="(max-width: 360px)" />
          <source srcSet="./imgs/family-345.jpg" media="(max-width: 375px)" />
          <source srcSet="./imgs/family-395.jpg" media="(max-width: 425px)" />
          <source srcSet="./imgs/family-528.jpg" media="(max-width: 768px)" />
          <img
            src="./imgs/family-1140.jpg"
            width="100%"
            alt="My family at Muir Woods"
          />
        </picture>
      </Card>
      <Card>
        <CardHeader className="py-2">
          <CardTitle className="text-center mb-0">About Patrick</CardTitle>
        </CardHeader>
        <CardBody css={aboutCardStyle}>
          <br />
          <p>
            Patrick is a web developer specializing in JavaScript, Typescript,
            React, and Node.
          </p>
          <p>
            Although he formally studied economics, Patrick has always loved
            tinkering on his computer. He combines his analytical university
            training with cutting-edge tooling to provide clients with the
            products they need in the most cost-effective and elegant way.
            {" Patrick's"} portfolio demonstrates his ability to build modern
            Javascript web apps—but {"he's"} always learning more.
          </p>
          <p>
            In his spare time, Patrick enjoys reading about finance, fitness,
            history, and computing—when {"he's "} not chasing around his son and
            daughter, that is.
          </p>
        </CardBody>
      </Card>
    </CardDeck>
  </Row>
)

export default About
