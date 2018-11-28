import Footer from "./Footer"
import Main from "./Main"
import Nav from "./Nav"
import React, { useState } from "react"

const App = () => {
  let [page, setPage] = useState("home")

  const pages = ["Home", "Contact"]

  return (
    <React.Fragment>
      <Nav setPage={setPage} pages={pages} />
      <Main page={page} />
      <Footer />
    </React.Fragment>
  )
}

export default App
