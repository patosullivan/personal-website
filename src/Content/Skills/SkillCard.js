import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"

const SkillCard = props => (
  <Card>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
)

SkillCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default SkillCard
