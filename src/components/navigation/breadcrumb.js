import React from "react"
import "./breadcrumb.css"

const Breadcrumb = props => {
  console.log(props)
  return (
    <nav className="bx-breadcrumb">
      <div className="container">
        <a href="https://bxblue.com.br">Página Inicial</a>
        <p>
          <i class="fas fa-chevron-right"></i>
        </p>
        {props.BreadcrumbItem.map((item, index) => (
          <>
            <a href={item.URL}>{item.Label}</a>
            {index < props.BreadcrumbItem.length - 1 && (
              <p>
                <i class="fas fa-chevron-right"></i>
              </p>
            )}
          </>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
