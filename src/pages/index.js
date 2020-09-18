import React from "react"
import Header from "./components/header"
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

export default function Home() {
  return (
    <div>
      <Header headerText="Contact" />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-morandi-watercolor-gradient-girl-heart-fresh-wedding-ppt-background-gouachegradientteenage-heartwedding-image_58973.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: '#000000' }}>Presentaciones</h3>
            <p style={{ backgroundColor: '#000000' }}>Acá hay muchas presentaciones.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-watercolor-blue-green-gradient-image_7009.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Presentadores</h3>
            <p>
              Nuestros presentadores.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  )
}
