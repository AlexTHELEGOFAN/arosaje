import { navigate } from 'gatsby'
import * as React from 'react'

const Footer = ({ siteTitle }) => (
  <footer className="flex justify-between bg-headerGreen px-4 py-6 fixed bottom-0 w-full">
    <div className="flex justify-center">
      <p className=" font-semibold">
        {' '}
        © {new Date().getFullYear()} &middot; Fait avec Gatsby
      </p>

      <div
        className="pl-4 text-blue-800 cursor-pointer"
        onClick={() => navigate(`/legal-notice/`)}
      >
        Mentions légales
      </div>
      <div
        className="pl-4 text-blue-800 cursor-pointer"
        onClick={() => navigate(`/privacy-policy/`)}
      >
        Politique de confidentialité
      </div>
      <div
        className="pl-4 text-blue-800 cursor-pointer"
        onClick={() => navigate(`/terms-of-service/`)}
      >
        Conditions générales
      </div>
    </div>
    <div>Arosa'je</div>
  </footer>
)

export default Footer
