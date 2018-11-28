import Banner from "./Banner"
import Footer from "./Footer"
import Main from "./Main"
import Nav from "./Nav"
import React, { useState } from "react"
import { Col, Container, Row } from "reactstrap"

const App = () => {
  let [page, setPage] = useState("Home")

  const pages = ["Home", "Contact"]

  return (
    <Container>
      <Row>
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav setPage={setPage} pages={pages} />
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
