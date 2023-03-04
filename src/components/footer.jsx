import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="bg-green-500 px-4 py-6">
    © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer
