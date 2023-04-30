// CookieBanner.js

import posthog from 'posthog-js'
import { useState } from 'react'
import React from 'react'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true)

  const acceptCookies = () => {
    // posthog.config.opt_in_capturing()
    setShowBanner(false)
  }

  const declineCookies = () => {
    // posthog.config.opt_out_capturing()
    setShowBanner(false)
  }

  return (
    <div>
      {showBanner && (
        <div className="flex justify-center mt-[262px] bg-blue-200">
          <p>
            Pour Arosa'je, le respect de votre vie privée est une priorité,
            Arosa'je utilisent des cookies pour stocker et accéder à vos données
            personnelles (telles que votre âge) afin de mesurer l'audience de
            nos contenus, de personnaliser les contenus et les services et de
            vous proposer des publicités personnalisées.
          </p>
          <button type="button" onClick={acceptCookies}>
            Accepter les cookies
          </button>
          <button type="button" onClick={declineCookies}>
            Refuser les cookies
          </button>
        </div>
      )}
    </div>
  )
}

export default CookieBanner
