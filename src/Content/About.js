import family from "./family.jpg"
import React from "react"
import {
  CardDeck,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg
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
        <CardImg
          width="50%"
          src={family}
          alt="Me and my family at Muir Woods"
        />
      </Card>
      <Card>
        <CardHeader className="py-2">
          <CardTitle className="text-center mb-0">About Patrick</CardTitle>
        </CardHeader>
        <CardBody css={aboutCardStyle}>
          <br />
          <p>
            Patrick is a front end developer specializing in Javascript, React,
            and Node.
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
            history, and computing—when {"he's "} not chasing around his infant
            daughter, that is.
          </p>
        </CardBody>
      </Card>
    </CardDeck>
  </Row>
)

export default About
