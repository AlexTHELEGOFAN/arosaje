import { navigate } from 'gatsby'
import React from 'react'
import posthog from 'posthog-js'
import CookieBanner from './CookieBanner'

const Footer = () => (
  <>
    {posthog.config.has_opted_out_capturing ||
    posthog.config.has_opted_in_capturing ? null : (
      <CookieBanner />
    )}
    <footer className="flex justify-between bg-headerGreen px-4 py-6 fixed bottom-0 w-full">
      <div className="flex justify-center">
        <p className=" font-semibold">
          {' '}
          © {new Date().getFullYear()} &middot; Fait avec Gatsby
        </p>

        <div
          className="pl-4 text-blue-800 cursor-pointer"
          onClick={() => (
            navigate(`/legal-notice/`),
            setTimeout(() => {
              window.location.reload()
            }, 500)
          )}
        >
          Mentions légales
        </div>
        <div
          className="pl-4 text-blue-800 cursor-pointer"
          onClick={() => (
            navigate(`/privacy-policy/`),
            setTimeout(() => {
              window.location.reload()
            }, 500)
          )}
        >
          Politique de confidentialité
        </div>
        <div
          className="pl-4 text-blue-800 cursor-pointer"
          onClick={() => (
            navigate(`/terms-of-service/`),
            setTimeout(() => {
              window.location.reload()
            }, 500)
          )}
        >
          Conditions générales
        </div>
      </div>
      <div>Arosa'je</div>
    </footer>
  </>
)

export default Footer
