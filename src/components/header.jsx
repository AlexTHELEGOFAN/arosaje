import React, { useContext, useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'

import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faSearch,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import logo from '@assets/icons/icone.jpg'
import { SearchContext } from '../context/SearchContext'
import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { UserContext } from '../context/UserContext'

// Header layout

const Header = () => {
  // const cookies = new Cookies()
  // const jwt = cookies.get('jwt')
  const jwt = localStorage.getItem('jwt')
  const user = localStorage.getItem('user')

  const { currentUser } = useContext(UserContext)

  let decodedToken = ''
  !jwt ?? (decodedToken = jwtDecode(jwt))

  const currentTime = Math.round(new Date().getTime() / 1000)
  let expired
  currentTime > decodedToken.exp ? (expired = true) : (expired = false)

  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  const optionLinks = [
    { value: '/new', label: '+ Nouvelle annonce' },
    { value: '/account/1', label: 'Mon compte' },
    { value: '/messages/1', label: 'Messages' },
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

  return (
    <header className="bg-headerGreen px-4 py-6 flex justify-between items-center sticky top-0 z-50">
      <div>
        <Link to="/home" className="flex text-lg font-bold">
          <img
            width="100%"
            src={logo}
            alt="Arosa'je"
            className="cursor-pointer max-w-[40px] pr-2"
          />
          <p>Arosa'je</p>
        </Link>
      </div>

      <div className="flex justify-between items-center relative">
        <input
          className="w-52 bg-white border border-solid border-gray-400 text-gray-700 text-sm rounded p-2"
          type="text"
          placeholder="Que recherchez vous ?"
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
        />

        {/* {searchQuery.length > 0 && (
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="absolute w-4 h-4 right-4 cursor-pointer pr-6"
          />
        )} */}
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
              <Link
                to="/register"
                className="w-[150px] h-8 text-black header-button mr-4 text-center"
              >
                Créer un compte
              </Link>
              <Link
                to="/login"
                className="w-[120px] h-8 text-black header-button text-center"
              >
                Se connecter
              </Link>
            </>
          ) : (
            <>
              <div
                className="w-[170px] header-button mr-4"
                onClick={() => navigate('/new')}
              >
                + Nouvelle annonce
              </div>

              <div
                className="w-[140px] header-button mr-4"
                onClick={() => localStorage.clear()}
              >
                Se déconnecter
              </div>
              {/* <Link to="/messages/1" className="w-[100px] header-button mr-4">
  Message
</Link> */}
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
            options={optionLinks}
            placeholder={<FontAwesomeIcon icon={faBars} />}
            components={{ Option: OptionLink }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
