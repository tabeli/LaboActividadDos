import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"

export default function About() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}