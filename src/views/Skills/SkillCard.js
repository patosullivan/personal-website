import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillCard = props => (
  <Card>
    <CardHeader>
      <CardTitle>
        <FontAwesomeIcon icon={props.icon} size="lg" />
        &nbsp; {props.title}
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
)

SkillCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object
}

export default SkillCard
