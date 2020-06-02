import React from "react"
import { Card, CardBody } from "reactstrap"
import { Switch, Route } from "react-router-dom"

const About = React.lazy(() => import("../views/About"))
const Contact = React.lazy(() => import("../views/Contact"))
const Skills = React.lazy(() => import("../views/Skills/Skills"))

const Main = () => {
  return (
    <main className="py-1">
      <Card>
        <CardBody className="p-2 mx-3">
          <React.Suspense fallback={"Loding..."}>
            <Switch>
              <Route exact path="/" component={() => <About />} />
              <Route path="/contact" component={() => <Contact />} />
              <Route path="/skills" component={() => <Skills />} />
            </Switch>
          </React.Suspense>
        </CardBody>
      </Card>
    </main>
  )
}

export default Main
