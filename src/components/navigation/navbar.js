import React from "react"
import "./navbar.css"

const Navbar = props => {
  return (
    <header className="bx-header">
      <div className="bx-navigation">
        <a className="logo" href="/">
          bxblue
        </a>
        <div className="actions">
          <nav className="links">
            <a className="link" href="/produtos">
              Produtos
            </a>
            <a className="link" href="/produtos">
              Parceiros
            </a>
            <a className="link" href="/aprenda">
              Aprenda
            </a>
            <a className="link" href="/">
              Contato
            </a>
          </nav>
          <a className="bx-button -small" href="/pedido">
            Simular
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
