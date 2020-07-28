const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Fetch all required entities via REST API
  const pages = await fetch(`${process.env.API_URL}/pages`).then(res =>
    res.json()
  )

  const menu = await fetch(`${process.env.API_URL}/menus`).then(res =>
    res.json()
  )

  const testimonials = await fetch(
    `${process.env.API_URL}/depoimentos`
  ).then(res => res.json())

  const banks = await fetch(`${process.env.API_URL}/banks`).then(res =>
    res.json()
  )

  const faqs = await fetch(`${process.env.API_URL}/faqs`).then(res =>
    res.json()
  )

  const home = pages.find(page => page.slug === "home")

  // Helper
  const getContext = params => ({
    ...params,
    testimonials,
    menu,
    banks,
    faqs,
  })

  // Declare routes for each page
  pages.forEach((page, _index) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: getContext(page),
    })
  })

  if (!home) {
    return
  }

  // Declare route for home page (if present)
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/page.js"),
    context: getContext(home),
  })
}
