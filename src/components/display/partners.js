import React from "react"
import "./partners.css"

const Partners = props => {
  return (
    <section className="bx-partners">
      <div className="container">
        <ul className="list">
          {props.PartnerItem.map(item => (
            <li key={item.id}>
              <a href={item.URL}>
                <img src={item.Image.url} alt={item.URL} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Partners
