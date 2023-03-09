import * as React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"

// Account page
const AccountPage = () => {
  return (
    <Layout>
      <button
        className="flex text-center items-center"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2xl"
          className="w-5 h-5 text black mr-5"
        />
        Retour
      </button>

      <div className="flex justify-center items-center">
        <div className="mt-2 bg-secondGreen px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <div className="flex items-center pb-6">
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 pr-4"
            />
            <p>Account username</p>
          </div>
          <div className="pb-6">
            <p>Statut : </p>
            <p>Adresse : </p>
            <p>Adresse email :</p>
            <p>Numéro de téléphone :</p>
            <p>is absent</p>
          </div>

          <div className="">
            <div className="">
              <Link to="/" className="pb-6 w-5 h-5 text-black header-button">
                Contacter
              </Link>
            </div>

            <div className="">Annonces de l'utilisateur</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AccountPage
