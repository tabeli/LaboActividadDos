import React, { useEffect, useState } from "react"
import Header from "./components/header"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default function PresentacionesPasadas() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      presentation: allAirtable(
        filter: { table: { eq: "presentation" } }
        sort: { fields: data___startDate, order: ASC }
      ) {
        nodes {
          data {
            name
            description
            startDate
            startHour
            presenter
            photo {
              url
            }
          }
          recordId
        }
      }
    }
  `)

  function min_date() {
    var min_dt = data.presentation.nodes[0],
      min_dtObj = new Date(data.presentation.nodes[0])
    data.presentation.nodes.forEach(function (dt, index) {
      if (new Date(dt) < min_dtObj) {
        min_dt = dt
        min_dtObj = new Date(dt)
      }
    })
    return min_dt
  }

  const calculateTimeLeft = () => {
    const difference =
      +new Date(`${data.presentation.nodes[2].data.startDate}`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  function getFormatedDate() {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, "0")
    var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
    var yyyy = today.getFullYear()

    today = yyyy + "-" + mm + "-" + dd
    return today
  }

  var presentations = [];

  function filterPresentations() {
    for(var i = 0; i < data.presentation.nodes.length; i++){
      if(data.presentation.nodes[i].data.startDate < getFormatedDate()){
        console.log(data.presentation.nodes[i].data.startDate);
        presentations.push(data.presentation.nodes[i]);
      }
      i++;
    }
  }
  console.log();

  return (
    <div>
      <Header headerText="Hello Gatsby!" />
      <br />
      <br />
      <Container>
        <h2 style={{"textAlign":"center"}}>
        Nuestras presentaciones pasadas ;)
        </h2>
        <br />
        <br />
        <div>
          {data.presentation.nodes.map((item, i) => item.data.startDate <= getFormatedDate() ? (
            <div key={i}>
              
              <Row>
                <Col style={{ backgroundColor: "#3b5998" }}>
                  <br />
                  <h1 style={{ color: "white" }}>{item.data.name}</h1>
                  <h3 style={{ color: "white" }}>{item.data.startDate}</h3>
                  <h5 style={{ "textAlign": "justify", color: "#d4d8e8" }}>
                    {item.data.description}
                  </h5>
                </Col>
                <Col>
                  <img src={item.data.photo[0].url} alt="something cool"></img>
                </Col>
              </Row>
              <br />
              <br />
            </div>
          ):
          <div></div>
            )}
        </div>
      </Container>
    </div>
  )
}
