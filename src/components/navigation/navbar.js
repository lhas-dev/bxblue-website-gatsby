import React from "react"
import { Link } from "@reach/router"
import "./navbar.css"

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
  return (
    <header className="bx-header">
      <div className="bx-navigation">
        <Link className="logo" to="/">
          bxblue
        </Link>
        <div className="actions">
          <nav className="links">
            {props.menu.map(menu => getMenuComponent(menu))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
