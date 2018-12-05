import React from "react"
import DemoCard from "./DemoCard"
import {CardGroup} from "reactstrap"

const Demos = () => {
  const demoArray = [
    {
      demo: "Andrea's blog",
      text:
        "A website and blog for my wife, Andrea. Built using React for the frontend and strapi for the backend. The frontend is deployed via a contiuous integration process on Netlify, the backend is deployed via docker-machine on Digital Ocean.",
      link: "http://andrea.osullivan.io",
      ghLink: "https://github.com/patosullivan/andrea-blog"
    },
    {
      demo: "Demo App #2",
      text: "Coming soon.",
      link: "#",
      ghLink: "#"
    },
    {
      demo: "Demo App #3",
      text: "Coming soon.",
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
