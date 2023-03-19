import React, { useContext } from "react"
import { Link, navigate } from "gatsby"

import Select from "react-select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"

import logo from "../assets/images/icone.jpg"
import { SearchContext } from "../context/SearchContext"

// Header layout

const Header = ({ currentUser }) => {
  const { setSearch } = useContext(SearchContext)

  const optionLinks = [
    { value: "/new", label: "+ Nouvelle annonce" },
    { value: "/account/1", label: "Mon compte" },
    { value: "/messages/1", label: "Messages" },
  ]

  // { value: "/register", label: "Créer un compte" },
  // { value: "/login", label: "Se connecter" },

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
          id="searchParticipant"
          name="searchParticipant"
          placeholder="Que recherchez vous ?"
          onChange={e => setSearch(e.target.value)}
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
          <Link
            to="/new"
            className="w-[170px] h-8 text-black header-button mr-4 text-center"
          >
            + Nouvelle annonce
          </Link>

          <Link
            to="/messages/1"
            className="w-[100px] h-8 text-black header-button mr-4 text-center"
          >
            Messages
          </Link>

          {/* <Link
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
          </Link> */}

          <div className="cursor-pointer text-black">
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 text-black"
              // onClick={() => navigate(`/account/${currentUser?.id}/`)}
              onClick={() => navigate(`/account/1`)}
            />
          </div>
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
