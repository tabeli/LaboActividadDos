import React from "react"
import Header from "./components/header"
import "./styles/global.css"
import { useStaticQuery, graphql } from 'gatsby';

export default function Home() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      presentation: allAirtable(
        filter: { table: { eq: "presentation" } }
        sort: { fields: data___startDate, order: DESC }
      ) {
        nodes {
          data {
            name
            description
            startDate
            startHour
            presenter
          }
          recordId
        }
      }
    }
  `);
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Contact" />
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <ul>
        {data.presentation.nodes.map((item, i) => (
          <li key={item.recordId}>
            <p>
              {item.data.name}, {item.data.startDate}
            </p>
            <p>{item.data.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}