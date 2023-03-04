import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header
    className="bg-green-500 px-4 py-6 flex justify-between items-center"
    // style={{
    //   margin: `0 auto`,
    //   padding: `var(--space-4) var(--size-gutter)`,
    //   display: `flex`,
    //   alignItems: `center`,
    //   justifyContent: `space-between`,
    // }}
  >
    <div>
      <Link to="/" className="text-sm">
        Logo Arosa'je
      </Link>
    </div>

    <div className="flex justify-between items-center">
      <input
        className="w-[200px] bg-white border border-solid border-gray-400 text-gray-700 text-sm rounded p-2"
        type="text"
        id="searchParticipant"
        name="searchParticipant"
        placeholder="Que recherchez vous ?"
        // onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>

    <div>
      <div>
        <div>
          <Link to="/" className="w-5 h-5 text-black">
            Créer un compte
          </Link>
        </div>
        <div>
          <Link to="/" className="w-5 h-5 text-black">
            Se connecter
          </Link>
        </div>
      </div>

      <FontAwesomeIcon icon={faUser} size="2xl" className="w-5 h-5 " />
    </div>
  </header>
)

export default Header
