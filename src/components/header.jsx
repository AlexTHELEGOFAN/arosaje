import * as React from "react"

import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons"

// Header layout

const Header = ({ siteTitle, currentUser }) => (
  <header
    className="bg-headerGreen px-4 py-6 flex justify-between items-center"
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
        // onClick={(e) => setSearchValue(e.target.value)}
      />
    </div>

    <div className="flex justify-center">
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
      <FontAwesomeIcon
        icon={faUser}
        size="2xl"
        className="w-5 h-5 text-black"
        onClick={() => navigate(`/account/${currentUser?.id}/`)}
      />
      {/* </Link> */}
    </div>
  </header>
)

export default Header
