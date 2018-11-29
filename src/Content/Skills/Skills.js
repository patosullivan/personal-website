import React from "react"
import SkillCard from "./SkillCard"
import { CardGroup } from "reactstrap"

const Skills = () => {
  const skillArray = [
    {
      skill: "React",
      text: "React 16+, including Hooks, Suspense, and other modern features."
    },
    {
      skill: "JavaScript",
      text: "ES6+. Modern, efficient. JAMstack preferred."
    }
  ]

  return (
    <CardGroup>
      {skillArray.map((skillObj, index) => (
        <SkillCard key={index} title={skillObj.skill} text={skillObj.text} />
      ))}
    </CardGroup>
  )
}

export default Skills
