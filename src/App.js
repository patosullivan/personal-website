import Banner from "./Layout/Banner"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"
import Nav from "./Layout/Nav"
import React from "react"
import { Col, Container, Row } from "reactstrap"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  const pages = ["About", "Skills", "Demos", "Contact"]

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav pages={pages} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
