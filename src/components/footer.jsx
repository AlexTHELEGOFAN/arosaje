import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="flex justify-between bg-green-500 px-4 py-6 fixed bottom-0 w-full">
    <div>
      © {new Date().getFullYear()} &middot; Fait avec
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
    <div>Arosa'je</div>
  </footer>
)

export default Footer
