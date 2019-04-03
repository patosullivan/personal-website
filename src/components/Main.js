import About from "../views/About"
import React from "react"
import { Card, CardBody } from "reactstrap"
import Contact from "../views/Contact"
import Skills from "../views/Skills/Skills"
import Demos from "../views/Demos/Demos"
import { Switch, Route } from "react-router-dom"

const Main = () => {
  return (
    <main className="py-1">
      <Card>
        <CardBody className="p-2 mx-3">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/skills" component={Skills} />
            <Route path="/demos" component={Demos} />
          </Switch>
        </CardBody>
      </Card>
    </main>
  )
}

export default Main
