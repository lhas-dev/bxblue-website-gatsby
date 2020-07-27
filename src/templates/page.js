import React from "react"
import ComponentsTree from "../components/index"
import SEO from "../components/seo"
import "../stylesheets/base/_unclassed.scss"
import "../stylesheets/bx-button.css"

const Page = props => {
  return (
    <>
      <SEO title={props.pageContext.name} />
      {props.pageContext.components.map((component, index) => (
        <React.Fragment key={index}>
          {!!ComponentsTree[component["__component"]] &&
            ComponentsTree[component["__component"]]({
              ...component,
              ...props.pageContext,
            })}
        </React.Fragment>
      ))}
    </>
  )
}

export default Page
