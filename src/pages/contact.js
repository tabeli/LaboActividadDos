import React from "react"
import Header from "./components/header"
import { Form, Button, Col, Container } from "react-bootstrap"
import * as emailjs from "emailjs-com"

class Contact extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      cellphone: "",
      message: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, email, cellphone, message } = this.state
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tabatha",
      from_cellphone: cellphone,
      from_message: message
    }
    emailjs.send(
      "gmail",
      "template_lbgjy3a",
      templateParams,
      "user_3W5KEUSb6q8dYylOBsnar"
    )
    this.resetForm()
    alert("Hemos recibido tu mensaje. Muchas gracias por tu opinión!")
    window.location.reload(false)
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      cellphone: "",
      message: ""
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { name, email, cellphone, message } = this.state

    return (
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <br />
        <br />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  id="name"
                  placeholder="Ingresa el nombre"
                  required name="name" 
                  value={name} 
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Ingresa el email"
                  required name="email" 
                  value={email} 
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridNumber">
              <Form.Label>Número celular</Form.Label>
              <Form.Control
                type="number"
                id="cellphone"
                placeholder="Ingresa el celular"
                required name="cellphone" 
                value={cellphone} 
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                type="message"
                id="message"
                placeholder="Ingresa un mensaje adicional"
                required name="message" 
                value={message} 
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Contact
