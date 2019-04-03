import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import React from "react"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle
} from "reactstrap"

const DemoCard = props => (
  <Card>
    <CardHeader>
      <CardTitle>{props.title}</CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>{props.text}</CardText>
    </CardBody>
    <CardFooter>
      <a href={props.link} className="card-link">
        <FontAwesomeIcon icon={faAngleRight} /> Try it
      </a>
      <a href={props.ghLink} className="card-link">
        <FontAwesomeIcon icon={faGithub} /> Repo
      </a>
    </CardFooter>
  </Card>
)

DemoCard.propTypes = {
  ghLink: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default DemoCard
