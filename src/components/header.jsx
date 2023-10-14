import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import logo from '@assets/icons/icone.jpg'
import { SearchContext } from '../context/SearchContext'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import CookieBanner from './CookieBanner'

// ** Header layout

const Header = () => {
  const jwt = localStorage.getItem('jwt')
  const user = localStorage.getItem('user')

  let decodedToken = ''
  !jwt ?? (decodedToken = jwtDecode(jwt))

  const currentTime = Math.round(new Date().getTime() / 1000)
  let expired
  currentTime > decodedToken.exp ? (expired = true) : (expired = false)

  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  const optionLinksNotLogged = [
    { value: '/register', label: 'Créer un compte' },
    { value: `/login`, label: 'Se connecter' },
  ]

  const optionLinks = [
    { value: `/history/${user}/`, label: 'Historique' },
    { value: '/new', label: '+ Nouvelle annonce' },
    { value: ``, label: 'Se déconnecter' },
    { value: `/account/${user}/`, label: 'Mon compte' },
  ]

  const handleSearch = event => {
    setSearchQuery(event)
  }

  const OptionLink = ({ data }) => {
    const handleClick = () => {
      window.location.href = data.value
    }
    return <div onClick={handleClick}>{data.label}</div>
  }

  const handleLogout = () => {
    localStorage.clear()
    toast.info('Vous êtes maintenant déconnecté', {
      position: 'bottom-right',
    })
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <>
      <CookieBanner className="pt-2" />
      <header className="bg-headerGreen px-4 py-6 flex justify-between items-center sticky top-0 z-50">
        <div>
          <div
            to="/home"
            className="flex text-lg font-bold cursor-pointer"
            onClick={() => navigate('/home')}
          >
            <img
              width="100%"
              src={logo}
              alt="Arosa'je"
              className="cursor-pointer max-w-[40px] pr-2"
            />
            <p>Arosa'je</p>
          </div>
        </div>

        <div className="flex justify-between items-center relative">
          <input
            className="w-52 bg-white border border-solid border-gray-400 text-gray-700 text-sm rounded p-2"
            type="text"
            placeholder="Que recherchez vous ?"
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
          />

          <FontAwesomeIcon
            icon={faSearch}
            size="2xl"
            className="absolute w-4 h-4 right-4 cursor-pointer"
          />
        </div>

        <div className="flex items-center">
          <div
            className="hidden fixed
          md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6"
          >
            {expired || jwt === null ? (
              <>
                <div
                  className="w-[150px] h-8 text-black header-button mr-4 text-center cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  Créer un compte
                </div>
                <div
                  className="w-[120px] h-8 text-black header-button mr-4 text-center cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Se connecter
                </div>
              </>
            ) : (
              <>
                <div
                  className="w-[130px] h-8 text-black header-button mr-4 text-center cursor-pointer"
                  onClick={() => navigate(`/history/${user}/`)}
                >
                  Historique
                </div>

                <div
                  className="w-[170px] h-8 text-black header-button mr-4 text-center cursor-pointer"
                  onClick={() => navigate('/new')}
                >
                  + Nouvelle annonce
                </div>

                <div
                  className="w-[140px] header-button mr-4 cursor-pointer"
                  onClick={() => handleLogout()}
                >
                  Se déconnecter
                </div>

                <div className="cursor-pointer text-black">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2xl"
                    className="w-5 h-5 text-black"
                    onClick={() => navigate(`/account/${user}/`)}
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <Select
              className="px-4 w-[150px] focus:outline-none md:hidden cursor-pointer"
              options={
                expired || jwt === null ? optionLinksNotLogged : optionLinks
              }
              placeholder={<FontAwesomeIcon icon={faBars} />}
              components={{ Option: OptionLink }}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
