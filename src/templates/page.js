import React from "react"
import ComponentsTree from "../components/index"
import SEO from "../components/seo"
import "../stylesheets/bx-button.css"

const Page = props => {
  return (
    <>
      <SEO title={props.pageContext.name} />
      {props.pageContext.components.map(component => (
        <div key={component["__component"]}>
          {!!ComponentsTree[component["__component"]] &&
            ComponentsTree[component["__component"]]({
              ...component,
              ...props.pageContext,
            })}
        </div>
      ))}
    </>
  )
}

export default Page
