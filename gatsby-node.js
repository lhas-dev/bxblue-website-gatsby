const fetch = require("node-fetch")

const getContext = params => ({
  ...params,
  id: params.id,
  name: params.name,
  components: params.components,
  testimonials: params.testimonials,
  menu: params.menu,
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await fetch(`${process.env.API_URL}/pages`).then(res =>
    res.json()
  )
  const menu = await fetch(`${process.env.API_URL}/menus`).then(res =>
    res.json()
  )
  const testimonials = await fetch(
    `${process.env.API_URL}/depoimentos`
  ).then(res => res.json())
  const banks = await fetch(`${process.env.API_URL}/bancos`).then(res =>
    res.json()
  )

  const home = pages.find(page => page.slug === "home")

  pages.forEach((page, _index) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: getContext({ ...page, testimonials, menu }),
    })
  })

  if (!home) {
    return
  }

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/page.js"),
    context: getContext({ ...home, testimonials, menu }),
  })
}
