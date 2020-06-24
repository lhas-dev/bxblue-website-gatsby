import React from "react"
import "./hero.css"

const Hero = props => {
  console.log(props)
  return (
    <section
      className="section-hero -landing"
      style={{ backgroundImage: `url(${props.featured_image.url})` }}
    >
      <h1 className="title">{props.title}</h1>
      <a className="bx-button -overdark -large" href={props.button_link}>
        {props.button_text}
      </a>
    </section>
  )
}

export default Hero
