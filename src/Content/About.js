import family from "./family.jpg"
import React from "react"
import { Col, Row } from "reactstrap"

const About = () => (
  <React.Fragment>
    <Row>
      <Col>
        <img src={family} className="w-100 border rounded float-left" />
      </Col>
      <Col sm>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
          efficitur rutrum. Pellentesque augue neque, posuere sit amet elementum
          tempor, vestibulum ac tortor. Aliquam nec nisl in odio sagittis
          lacinia. Vivamus turpis mauris, consequat a orci quis, efficitur
          bibendum orci. Cras non posuere mauris. Donec vel congue turpis.
        </p>
        <p>
          Suspendisse a sapien lectus. Aenean nec nunc elit. Integer hendrerit
          tempus tempor. Nam luctus purus libero, eu pretium orci mollis in.
          Nullam ultricies volutpat pharetra. Cras tincidunt ex vel erat commodo
          feugiat. Fusce sagittis tincidunt urna, ut ornare purus gravida eget.
          Integer tempor nisi vel lacus aliquam placerat.
        </p>
      </Col>
    </Row>
  </React.Fragment>
)

export default About
