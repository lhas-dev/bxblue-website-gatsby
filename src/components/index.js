import React from "react"
import DisplayBenefits from "./display/benefits"
import DisplayContact from "./display/contact"
import DisplayHero from "./display/hero"
import DisplayPurpose from "./display/purpose"
import DisplayRichText from "./display/richText"
import DisplaySteps from "./display/steps"
import DisplayTestimonials from "./display/testimonials"
import DisplayPartners from "./display/partners"
import NavigationFooter from "./navigation/footer"
import NavigationNavbar from "./navigation/navbar"
import NavigationBreadcrumb from "./navigation/breadcrumb"

const tree = {
  "display.benefits": props => <DisplayBenefits {...props} />,
  "display.contact": props => <DisplayContact {...props} />,
  "display.hero": props => <DisplayHero {...props} />,
  "display.purpose": props => <DisplayPurpose {...props} />,
  "display.rich-text": props => <DisplayRichText {...props} />,
  "display.steps": props => <DisplaySteps {...props} />,
  "display.testimonials": props => <DisplayTestimonials {...props} />,
  "display.partners": props => <DisplayPartners {...props} />,
  "navigation.navbar": props => <NavigationNavbar {...props} />,
  "navigation.breadcrumb": props => <NavigationBreadcrumb {...props} />,
  "navigation.footer": props => <NavigationFooter {...props} />,
}

export default tree
