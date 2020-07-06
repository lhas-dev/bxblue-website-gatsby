import React from "react"
import "./benefits.css"

const Benefits = props => {
  return (
    <section className="bx-benefits">
      <div className="container">
        <h2
          className="title"
          dangerouslySetInnerHTML={{ __html: props.Title }}
        />
        <ul className="list">
          {props.BenefitItem.map(item => (
            <li key={item.id}>
              <i className={`fa fa-${item.Icon}`} />
              <p>{item.Title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
