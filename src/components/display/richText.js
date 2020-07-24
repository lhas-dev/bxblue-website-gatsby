import React from "react"
import Markdown from "react-markdown"
import "./richText.css"

const RichText = props => {
  return (
    <section className="section-richtext">
      {!!props.featured_image &&
        props.featured_image_position == "esquerda" && (
          <img
            src={props.featured_image.url}
            className={`-${props.featured_image_position}`}
          />
        )}
      <div class="content">
        <Markdown source={props.content} />
      </div>
      {!!props.featured_image && props.featured_image_position == "direita" && (
        <img
          src={props.featured_image.url}
          className={`-${props.featured_image_position}`}
        />
      )}
    </section>
  )
}

export default RichText
