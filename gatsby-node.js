const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await fetch(`${process.env.API_URL}/pages`).then(res =>
    res.json()
  )
  const menu = await fetch(`${process.env.API_URL}/menus`).then(res =>
    res.json()
  )
  const home = pages.find(page => page.slug === "home")

  pages.forEach((page, _index) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
        name: page.name,
        components: page.components,
        menu,
      },
    })
  })

  if (!home) {
    return
  }

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/page.js"),
    context: {
      id: home.id,
      name: home.name,
      components: home.components,
      menu,
    },
  })
}
