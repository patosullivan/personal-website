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
    },
    {
      skill: "TypeScript",
      text: "Safe, robust, clean, and self-documenting."
    },
    {
      skill: "Node",
      text: "Fast JS backends/APIs with Express.js"
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
