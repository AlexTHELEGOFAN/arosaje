import * as React from "react"

import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBurger, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import Select from "react-select"

// Header layout

const Header = ({ siteTitle, currentUser }) => (
  <header
    className="bg-headerGreen px-4 py-6 flex justify-between items-center sticky top-0 z-50"
    // style={{
    //   margin: `0 auto`,
    //   padding: `var(--space-4) var(--size-gutter)`,
    //   display: `flex`,
    //   alignItems: `center`,
    //   justifyContent: `space-between`,
    // }}
  >
    <div>
      <Link to="/home" className="text-sm">
        Logo Arosa'je
      </Link>
    </div>

    <div className="flex justify-between items-center relative">
      <input
        className="w-52 bg-white border border-solid border-gray-400 text-gray-700 text-sm rounded p-2"
        type="text"
        id="searchParticipant"
        name="searchParticipant"
        placeholder="Que recherchez vous ?"
        // onChange={(e) => setSearchValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        size="2xl"
        className="absolute w-4 h-4 right-4 cursor-pointer"
        // onClick={window.scrollTo(500, 0)}
      />
    </div>

    <div className="flex items-center">
      <Select
        type="button"
        className="px-4 text-gray-500 focus:outline-none md:hidden"
        // onClick={() => setSidebarOpen(true)}
      >
        <span className="">{"menu"}</span>
        <FontAwesomeIcon className="h-6 w-6" icon={faBurger} />
      </Select>

      <div className="mr-6">
        <Link to="/new" className="w-5 h-5 text-black header-button mr-4">
          + Nouvelle annonce
        </Link>

        <Link to="/register" className="w-5 h-5 text-black header-button mr-4">
          Créer un compte
        </Link>

        <Link to="/login" className="w-5 h-5 text-black header-button">
          Se connecter
        </Link>
      </div>

      {/* <Select
            options={filterAds}
            defaultValue={"2"}
            onChange={handleFilterChange}
            placeholder={"Filtres"}
            className="w-[250px]"
            components={{ Option: IconOption }}
          /> */}
      {/* <Link to="/account/${advert?.id_annonce}/" className="text-black"> */}
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={faUser}
          size="2xl"
          className="w-5 h-5 text-black"
          onClick={() => navigate(`/account/${currentUser?.id}/`)}
        />
      </div>
      {/* </Link> */}
    </div>
  </header>
)

export default Header
