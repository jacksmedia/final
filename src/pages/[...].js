import React from "react"
import { Router } from "@reach/router"
import Index from "./index"
import Rarity from "./rarity"
import Whitepaper from "./whitepaper"
import Wave7 from "./wave7"

const App = () => {
  return (
    <Router basepath="/app">
      <Whitepaper path="/whitepaper" />
      <Rarity path="/rarity" />
      <Wave7 path="/wave7" />
      <Index path="/" />
    </Router>
  )
}
export default App
