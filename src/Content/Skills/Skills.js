import React from "react"
import SkillCard from "./SkillCard"
import { CardGroup } from "reactstrap"
import { faNode, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const Skills = () => {
  const skillArray = [
    {
      skill: "React",
      text: "React 16+, including Hooks, Suspense, and other modern features.",
      icon: faReact
    },
    {
      skill: "JavaScript",
      text: "ES6+. Modern, efficient. JAMstack preferred.",
      icon: faJsSquare
    },
    {
      skill: "Node",
      text: "Fast JS backends/APIs with Express.js",
      icon: faNode
    }
  ]

  return (
    <CardGroup>
      {skillArray.map((skillObj, index) => (
        <SkillCard
          key={index}
          title={skillObj.skill}
          text={skillObj.text}
          icon={skillObj.icon}
        />
      ))}
    </CardGroup>
  )
}

export default Skills
