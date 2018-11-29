import React from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroup, ListGroupItem } from "reactstrap"

const Contact = () => (
  <React.Fragment>
    <ListGroup>
      <ListGroupItem>
        <a href="mailto:patrick@osullivan.io">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="https://github.com/patosullivan">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="https://linkedin.com/in/patosullivan">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </ListGroupItem>
    </ListGroup>
  </React.Fragment>
)

export default Contact
