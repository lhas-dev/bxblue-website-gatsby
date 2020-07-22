import React from "react"
import "./breadcrumb.css"

const Breadcrumb = props => {
  return (
    <nav className="bx-breadcrumb">
      <div className="container">
        <a href="https://bxblue.com.br">Página Inicial</a>
        <p>
          <i className="fas fa-chevron-right"></i>
        </p>
        {props.BreadcrumbItem.map((item, index) => (
          <React.Fragment key={index}>
            <a key={index} href={item.URL}>
              {item.Label}
            </a>
            {index < props.BreadcrumbItem.length - 1 && (
              <p>
                <i className="fas fa-chevron-right"></i>
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
