import React from "react"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"

export default function Header(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="https://www.iconfinder.com/data/icons/finance-152/64/23-512.png" alt="presentation" style={{"height" : "40px", "width" : "40px"}}></img>
          <img src="https://www.iconfinder.com/data/icons/finance-152/64/23-512.png" alt="presentation" style={{"height" : "40px", "width" : "40px"}}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown style={{"color":"white"}} title="Presentaciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/presentacionesPasadas/">
                Presentaciones Pasadas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/presentacionesFuturas/">
                Presentaciones Futuras
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{"backgroundColor": "gray", "borderRadius":"5px", "color":"white"}} href="/contact/">Contacto</Nav.Link>
          </Nav>
          <Nav>
          <Button style={{"backgroundColor": "transparent", "borderColor":"transparent" ,"width":"55px", "height":"45px"}} href="https://facebook.com">
            <img style={{"width":"100%", "height":"100%"}} alt="facebook" src="https://www.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"></img>
            </Button> 
            <Button style={{"backgroundColor": "transparent", "borderColor":"transparent" ,"width":"55px", "height":"45px"}} href="https://twitter.com">
            <img style={{"width":"100%", "height":"100%"}} alt="twitter" src="https://www.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"></img>
            </Button> 
            <Button style={{"backgroundColor": "transparent", "borderColor":"transparent" ,"width":"55px", "height":"45px"}} href="https://linkedin.com">
            <img style={{"width":"100%", "height":"100%"}} alt="linkedin" src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"></img>
            </Button> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
