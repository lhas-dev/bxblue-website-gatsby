import React from "react"
import Markdown from "react-markdown"
import "./richText.scss"

const RichText = props => {
  return (
    <section className="section-richtext">
      {!!props.featured_image &&
        props.featured_image_position === "esquerda" && (
          <img
            alt="Imagem em destaque deste bloco de conteúdo"
            src={props.featured_image.url}
            className={`-${props.featured_image_position}`}
          />
        )}
      <div className="content">
        <Markdown source={props.content} />
      </div>
      {!!props.featured_image &&
        props.featured_image_position === "direita" && (
          <img
            alt="Imagem em destaque deste bloco de conteúdo"
            src={props.featured_image.url}
            className={`-${props.featured_image_position}`}
          />
        )}
    </section>
  )
}

export default RichText
