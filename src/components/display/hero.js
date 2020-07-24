import React from "react"
import Markdown from "react-markdown"
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
      {props.mostrar_aviso && (
        <div className="notice">
          <i className="fa fa-exclamation-triangle"></i>
          <Markdown source={props.aviso} />
        </div>
      )}
    </section>
  )
}

export default Hero
