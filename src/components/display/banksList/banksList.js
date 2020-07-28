import React from "react"
import { Link } from "@reach/router"
import "./banksList.scss"

const BanksList = props => {
  return (
    <section className="section-banks-list">
      <h1>
        {!!props.title
          ? "Alguns dos nossos bancos parceiros de consignado"
          : props.title}
      </h1>
      <ul className="list">
        {props.banks.map(bank => (
          <li key={bank.id}>
            <Link
              to={`/bancos/${bank.slug}`}
              title={`Empréstimo pelo ${bank.name} com a bxblue`}
            >
              <img src={bank.featured_image.url} alt={bank.name} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BanksList
