const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await fetch(`${process.env.API_URL}/pages`).then(res =>
    res.json()
  )
  pages.forEach((page, _index) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
        name: page.name,
        components: page.components,
      },
    })
  })
}
