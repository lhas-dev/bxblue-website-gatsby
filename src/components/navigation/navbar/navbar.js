import React, { useState } from "react"
import { Link } from "@reach/router"
import logo from "../../../images/logo.png"
import "./navbar.scss"

const getUrl = menu => {
  let url = ""

  if (menu.page) {
    url = `/${menu.page.slug}`
  }

  if (menu.URL) {
    url = menu.URL
  }

  return url
}

const getMenuComponent = menu => {
  const url = getUrl(menu)
  const isAbsolutePath = url.includes("http")
  const MenuComponent = isAbsolutePath ? "a" : Link

  return (
    <MenuComponent
      className={`link ${menu.Destaque ? "-primary" : ""}`}
      key={menu.id}
      to={!isAbsolutePath ? url : undefined}
      href={isAbsolutePath ? url : undefined}
    >
      {menu.Titulo}
    </MenuComponent>
  )
}

const Navbar = props => {
  const [visible, setVisible] = useState(false)

  const handleBars = () => {
    const newVisible = !visible
    setVisible(newVisible)
  }
  return (
    <header className="bx-header -big">
      <div className="bx-navigation">
        <Link className="logo" to="/">
          <img src={logo} alt="bxblue" />
        </Link>
        <div className={`actions ${visible ? "-visible" : ""}`}>
          <nav className="links">
            {props.menu.map(menu => getMenuComponent(menu))}
          </nav>
        </div>
        <button
          className="fa fa-bars"
          aria-label="Abrir e fechar menu"
          onClick={handleBars}
        ></button>
      </div>
    </header>
  )
}

export default Navbar
