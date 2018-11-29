import React from "react"
import DemoCard from "./DemoCard"
import { CardGroup } from "reactstrap"

const Demos = () => {
  const demoArray = [
    {
      demo: "Todo App",
      text: "Simple todo app.",
      link: "#",
      ghLink: "#"
    },
    {
      demo: "Demo App #2",
      text: "Another cool app.",
      link: "#",
      ghLink: "#"
    },
    {
      demo: "Demo App #3",
      text: "Check it out!",
      link: "#",
      ghLink: "#"
    }
  ]

  return (
    <CardGroup>
      {demoArray.map((demoObj, index) => (
        <DemoCard
          key={index}
          title={demoObj.demo}
          text={demoObj.text}
          link={demoObj.link}
          ghLink={demoObj.ghLink}
        />
      ))}
    </CardGroup>
  )
}

export default Demos
