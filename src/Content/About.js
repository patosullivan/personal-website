import family from "./family.jpg"
import React from "react"
import {Col, Row} from "reactstrap"

const About = () => (
  <Row className="py-0">
    <Col>
      <img src={family} className="w-100 border rounded float-left" />
    </Col>
    <Col sm>
      <br />
      <p>
        Patrick is a front end developer specializing in Javascript, React, and
        Node.
      </p>
      <p>
        Although he formally studied economics, Patrick has always been
        passionate about tinkering on his computer. He combines his analytical
        university training with cutting-edge tooling to provide clients with
        the products they need in the most cost-effective and elegant way.
        {" Patrick's"} portfolio demonstrates his ability to build modern
        Javascript web apps—but {"he's"} always learning more.
      </p>
      <p>
        In his spare time, Patrick enjoys reading about finance, fitness,
        history, and computing—when {"he's "} not chasing around his infant
        daughter, that is.
      </p>
    </Col>
  </Row>
)

export default About
