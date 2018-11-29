import family from "./family.jpg"
import React from "react"
import { Col, Row } from "reactstrap"

const About = () => (
  <React.Fragment>
    <Row>
      <Col>
        <h5>About me</h5>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="float-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
          efficitur rutrum. Pellentesque augue neque, posuere sit amet elementum
          tempor, vestibulum ac tortor. Aliquam nec nisl in odio sagittis
          lacinia. Vivamus turpis mauris, consequat a orci quis, efficitur
          bibendum orci. Cras non posuere mauris. Donec vel congue turpis.
          Praesent hendrerit, mi vitae lacinia rutrum, quam augue pulvinar
          augue, nec varius lorem tortor a magna. Proin sagittis at mi id
          sollicitudin. Nulla augue purus, semper eget interdum eget, dictum
          vitae nulla. Integer sed tincidunt nunc.
        </p>
        <p className="float-left">
          Suspendisse porttitor dapibus quam sed sodales. Suspendisse a sapien
          lectus. Aenean nec nunc elit. Integer hendrerit tempus tempor. Nam
          luctus purus libero, eu pretium orci mollis in. Nullam ultricies
          volutpat pharetra. Cras tincidunt ex vel erat commodo feugiat. Fusce
          sagittis tincidunt urna, ut ornare purus gravida eget. Integer tempor
          nisi vel lacus aliquam placerat. Maecenas ac egestas quam, at
          ultricies tortor. Duis vitae mi eget ex lobortis congue hendrerit quis
          sem. In non consequat ex, sed dignissim ex.
        </p>
      </Col>
      <Col>
        <img src={family} className="w-100 border rounded float-right" />
      </Col>
    </Row>
  </React.Fragment>
)

export default About
