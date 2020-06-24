import React from "react"
import Markdown from "react-markdown"
import "./richText.css"

const RichText = props => {
  return (
    <section className="section-richtext">
      <Markdown source={props.content} />
    </section>
  )
}

export default RichText
