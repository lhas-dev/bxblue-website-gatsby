import React from "react"
import "./purpose.css"

const Purpose = props => {
  return (
    <section className="section-purposes">
      <h2 className="title" dangerouslySetInnerHTML={{ __html: props.name }} />
      <div className="buttons">
        {props.PurposeItem.map(item => (
          <a key={item.id} className="bx-button" href={item.url}>
            {item.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Purpose
