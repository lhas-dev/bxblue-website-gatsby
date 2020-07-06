import React from "react"
import "./steps.css"

const Steps = props => {
  return (
    <section className="bx-steps">
      <div className="container">
        <h2
          className="title"
          dangerouslySetInnerHTML={{ __html: props.Title }}
        />
        <ul className="steps">
          {props.StepItem.map((item, index) => (
            <li key={item.id}>
              <img src={item.Image.url} alt={item.Title} />
              <p>
                <strong>{index + 1}.</strong> {item.Title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Steps
