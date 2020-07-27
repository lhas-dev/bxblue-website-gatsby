import React from "react"
import Markdown from "react-markdown"
import "./hero.scss"

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
      <span className="mask"></span>
      <div className="content">
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <a className="bx-button -overdark -large" href={props.button_link}>
          {props.button_text}
        </a>
      </div>
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
