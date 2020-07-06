import React from "react"
import DisplayContact from "./display/contact"
import DisplayHero from "./display/hero"
import DisplayPurpose from "./display/purpose"
import DisplayRichText from "./display/richText"
import DisplayTestimonials from "./display/testimonials"
import NavigationFooter from "./navigation/footer"
import NavigationNavbar from "./navigation/navbar"
import NavigationBreadcrumb from "./navigation/breadcrumb"

const tree = {
  "display.contact": props => <DisplayContact {...props} />,
  "display.hero": props => <DisplayHero {...props} />,
  "display.purpose": props => <DisplayPurpose {...props} />,
  "display.rich-text": props => <DisplayRichText {...props} />,
  "display.testimonials": props => <DisplayTestimonials {...props} />,
  "navigation.navbar": props => <NavigationNavbar {...props} />,
  "navigation.breadcrumb": props => <NavigationBreadcrumb {...props} />,
  "navigation.footer": props => <NavigationFooter {...props} />,
}

export default tree
