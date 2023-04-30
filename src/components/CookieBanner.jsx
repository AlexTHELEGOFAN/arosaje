// CookieBanner.js

import { useState } from 'react'
import React from 'react'
import Cookies from 'universal-cookie'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true)
  const cookies = new Cookies()

  const acceptCookies = () => {
    cookies.set('cookies', 'accepted', { path: '/' })
    cookies.set('phone', '06 28 79 52 47', { path: '/' })
    cookies.set('age', '21', { path: '/' })
    setShowBanner(false)
  }

  const declineCookies = () => {
    cookies.set('cookies', 'notAccepted', { path: '/' })
    setShowBanner(false)
  }

  const cookiesData = Boolean(cookies.get('cookies'))

  return !cookiesData ? (
    <div className="flex justify-center items-center  bg-yellow-200 px-4 py-4">
      <p className="w-[70%]">
        Pour Arosa'je, le respect de votre vie privée est une priorité, Arosa'je
        utilisent des cookies pour stocker et accéder à vos données personnelles
        (telles que votre âge) afin de mesurer l'audience de nos contenus, de
        personnaliser les contenus et les services et de vous proposer des
        publicités personnalisées.
      </p>
      <button
        type="button"
        className="w-[170px] h-8 text-black header-button mr-4 text-center cursor-pointer"
        onClick={acceptCookies}
      >
        Accepter les cookies
      </button>
      <button
        type="button"
        className="w-[170px] h-8 text-black header-button mr-4 text-center cursor-pointer"
        onClick={declineCookies}
      >
        Refuser les cookies
      </button>
    </div>
  ) : (
    ''
  )
}

export default CookieBanner
