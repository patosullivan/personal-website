import Banner from "./Layout/Banner"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"
import Nav from "./Layout/Nav"
import React, {useState} from "react"
import {Col, Container, Row} from "reactstrap"

const App = () => {
  let [page, setPage] = useState("About")

  const pages = ["About", "Skills", "Demos", "Contact"]

  return (
    <Container>
      <Row>
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav setPage={setPage} pages={pages} page={page} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main page={page} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
