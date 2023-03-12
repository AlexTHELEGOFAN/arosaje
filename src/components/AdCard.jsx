import React from "react"

// ** Utils

import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

// ** Event card

function AdCard({ advert }) {
  return (
    <div
      className="bg-green-100 min-h-[400px] py-4 pl-7 pr-5
    border-2 border-solid border-lightgrey-200 rounded-2xl mb-5 "
    >
      <div className="flex justify-between items-center align-center">
        <div className="status-tag bg-lightgrey-100 pb-2">
          <img
            src={advert.image_annonce}
            alt={advert.titre_annonce}
            className="bg-green-100 block ml-auto mr-auto max-w-[90%] drop-shadow-md cursor-pointer"
            onClick={() => navigate(`/advert/${advert?.id_annonce}/`)}
          />
        </div>
      </div>

      <div className="flex my-2">
        <div className="w-full">
          <div
            className="flex font-medium text-xl cursor-pointer pb-2"
            onClick={() => navigate(`/advert/${advert?.id_annonce}/`)}
          >
            {advert.titre_annonce}
          </div>

          <div className="flex pb-2">
            {advert.description_annonce.substring(0, 100).concat("...")}
          </div>

          <div className="flex pb-2">
            {advert.nom_plante} {advert.espece_plante}
          </div>
          <div className="flex justify-between">
            <p>{advert.adresse_plante}</p>

            <div
              className="flex items-center pb-6 cursor-pointer"
              onClick={() => navigate(`/account/${advert?.id}/`)}
            >
              <div>
                {advert.nom_proprio} {advert.prenom_proprio}
              </div>
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                className="w-5 h-5 pl-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdCard
