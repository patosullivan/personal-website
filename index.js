import App from "./src/App"
import React from "react"
import ReactDOM from "react-dom"
import "./scss/main.scss"
import registerServiceWorker from "./src/registerServiceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

registerServiceWorker()
