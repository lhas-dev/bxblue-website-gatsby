import React, { useState } from "react"
import "./faq.scss"

const FAQ = props => {
  const [visible, setVisible] = useState([])

  const isPresent = faq => visible.includes(faq.id)

  const handleQuestion = faq => {
    if (isPresent(faq)) {
      const newVisible = visible.filter(item => item !== faq.id)
      setVisible(newVisible)
    } else {
      const newVisible = [...visible, faq.id]
      setVisible(newVisible)
    }
  }

  return (
    <section className="section-faq">
      <h1>Perguntas e Respostas</h1>
      <ul className="list">
        {props.faqs.map(faq => (
          <li key={faq.id}>
            <h2 className="question" onClick={() => handleQuestion(faq)}>
              <i
                className={`fa ${
                  isPresent(faq) ? "fa-caret-up" : "fa-caret-down"
                }`}
              ></i>{" "}
              {faq.question}
            </h2>
            <p className={`answer ${isPresent(faq) ? "-visible" : ""}`}>
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQ
