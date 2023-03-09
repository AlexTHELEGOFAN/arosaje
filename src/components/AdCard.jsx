import React, { useEffect, useState } from "react"

// ** Utils

import dayjs from "dayjs"
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

// ** Event card
// { advert }
function AdCard({ advert }) {
  console.log(advert)
  //   const items = [
  //     { value: 100_000_000, label: 'Planifié' },
  //     { value: 100_000_001, label: 'Terminé' },
  //   ];
  //   const stateName = items.find((item) => item.value === event.state);

  return (
    <div className="bg-green-100 min-h-10 py-4 pl-7 pr-5 border-2 border-solid border-lightgrey-200 rounded-2xl mb-5">
      <div className="flex justify-between items-center align-center mb-3">
        <div className="status-tag bg-lightgrey-100">
          <img
            // max-width="70%"
            src={advert.image_annonce}
            alt={advert.titre_annonce}
            className="bg-green-100 block ml-auto mr-auto max-w-[90%]"
          />
        </div>
      </div>

      <div className="flex my-2 ">
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
              className="flex items-center pb-6 cursor-pointer"
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

      <div className="flex md:justify-end xs:justify-center">
        {/* <button
          className='h-9 px-9 py-3.5 flex items-center font-medium text-base leading-5 tracking-widest rounded-full bg-secondary text-white hover:bg-lightgrey-900 active:bg-lightgrey-500 disabled:bg-button-disable disabled:text-lightgrey-200 transition-all'
          onClick={() => {
            navigate(`/details/${event.id}`);
          }}
        >
          Détails
        </button> */}
      </div>
    </div>
  )
}

export default AdCard
