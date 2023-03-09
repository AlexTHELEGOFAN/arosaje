import React from "react"

// ** Utils

import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

// ** Event card

function AdCard({ advert }) {
  return (
    <div className="bg-green-100 min-h-[400px] py-4 pl-7 pr-5 border-2 border-solid border-lightgrey-200 rounded-2xl mb-5 flex flex-wrap content-between">
      <div className="flex justify-between items-center align-center mb-3">
        <div className="status-tag bg-lightgrey-100">
          <img
            // max-width="70%"
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
            className="flex font-medium text-xl cursor-pointer"
            onClick={() => navigate(`/advert/${advert?.id_annonce}/`)}
          >
            {advert.titre_annonce}
          </div>

          <div className="flex justify-between">
            <p>{advert.prix_annonce} €</p>

            <div
              className="flex items-center pb-6"
              //  onClick={() => navigate(`/account/${advert?.id_annonce}/`)}
            >
              <div>{advert.type_annonce}</div>
            </div>
          </div>

          <div className="flex pb-1">
            {advert.nom_plante} {advert.espece_plante}
          </div>
          <div className="flex justify-between">
            <p>{advert.adresse_plante}</p>

            <div
              className="flex items-center pb-6 cursor-pointer"
              //  onClick={() => navigate(`/account/${advert?.id_annonce}/`)}
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
