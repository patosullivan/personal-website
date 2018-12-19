import About from "../Content/About"
import React from "react"
import { Card, CardBody } from "reactstrap"
import Contact from "../Content/Contact"
import Skills from "../Content/Skills/Skills"
import Demos from "../Content/Demos/Demos"
import { Switch, Route } from "react-router-dom"

const Main = () => {
  return (
    <main className="py-2">
      <Card>
        <CardBody>
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
