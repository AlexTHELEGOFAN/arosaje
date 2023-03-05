import React, { useEffect, useState } from "react"

// ** Utils

import dayjs from "dayjs"

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
    <div className="bg-green-100 py-4 pl-7 pr-5 border-2 border-solid border-lightgrey-200 rounded-2xl mb-5">
      <div className="flex justify-between items-center align-center mb-3">
        <h1 className="truncate block">
          {/* {!event.name ? 'Evenement sans nom' : event.name} */}
        </h1>

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
        <ul className="w-[100px]">
          <li className="event-field pb-2">{advert.nom_proprio}</li>
          <li className="event-field pb-2">{advert.titre_annonce}</li>
          <li className="event-field pb-2">Type</li>
          <li className="event-field pb-2">{advert.prix_annonce} €</li>
        </ul>
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
