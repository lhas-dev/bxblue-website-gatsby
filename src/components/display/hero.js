import React from "react"
import "./hero.css"

const Hero = props => {
  return (
    <section
      className="section-hero -landing"
      style={{
        backgroundImage: props.featured_image
          ? `url(${props.featured_image.url})`
          : "",
      }}
    >
      <h1 className="title" dangerouslySetInnerHTML={{ __html: props.title }} />
      <a className="bx-button -overdark -large" href={props.button_link}>
        {props.button_text}
      </a>
    </section>
  )
}

export default Hero
