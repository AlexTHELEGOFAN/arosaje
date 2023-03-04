import React, { useEffect, useState } from "react"

// ** Utils

import dayjs from "dayjs"

// ** Event card
// { advert }
function AdCard({ ads }) {
  console.log(ads)
  //   const items = [
  //     { value: 100_000_000, label: 'Planifié' },
  //     { value: 100_000_001, label: 'Terminé' },
  //   ];
  //   const stateName = items.find((item) => item.value === event.state);

  return (
    <div className="bg-white py-4 pl-7 pr-5 border-2 border-solid border-lightgrey-200 rounded-2xl mb-5">
      <div className="flex justify-between items-center align-center mb-3">
        <h1 className="truncate block">
          {/* {!event.name ? 'Evenement sans nom' : event.name} */}
        </h1>

        <div className="status-tag bg-lightgrey-100">
          <p className=" text-lightgrey-300 font-normal">
            {/* {!stateName.label ? 'Aucun status' : stateName.label} */}
          </p>
        </div>
      </div>

      <div className="flex my-2 ">
        <ul className="w-[100px]">
          <li className="event-field pb-2">Utilisateur</li>
          <li className="event-field pb-2">Titre</li>
          <li className="event-field pb-2">Type</li>
          <li className="event-field pb-2">Prix</li>
        </ul>

        <img
          width="30%"
          src={ads.img}
          alt={ads.title}
          className="bg-green-100 flex ml-[35%]"
        />
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
