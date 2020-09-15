import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export default function Header(props) {
  return (
    <div>
      <header>
        <div class="wrapper">
          <div class="logo">
            <img src="https://i.postimg.cc/GpdP362Q/logo.png" alt="" />
          </div>
          <ul class="nav-area">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about/">Acerca</a>
            </li>
            <li>
              <a href="/contact/">Presentaciones Futuras</a>
            </li>
            <li>
              <a href="#">Presentaciones Pasadas</a>
            </li>
            <li>
              <a href="/contact/">Contacto</a>
            </li>
          </ul>
        </div>
        <div class="welcome-text">
          <h1>Nuestras presentaciones</h1>
          <a href="#">Contactanos</a>
        </div>
      </header>
    </div>
  )
}
