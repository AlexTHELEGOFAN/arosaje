import React, { useEffect, useState } from "react"

// ** Utils

import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { toast } from "react-toastify"

// ** Event card

function AdCard({ advert }) {
  console.log("advert", advert)

  return (
    <div
      className="bg-green-100 h-[460px] py-4 pl-7 pr-5
    border-2 border-solid border-lightgrey-200 rounded-2xl mb-5 "
    >
      <div className="flex justify-between items-center align-center">
        <div className="status-tag bg-lightgrey-100 pb-2">
          <img
            src={"data:image/jpeg;base64," + advert.image.image}
            alt={""}
            className="bg-green-100 block ml-auto mr-auto max-w-[90%] drop-shadow-md cursor-pointer"
            onClick={() => navigate(`/advert/${advert.plantId}/`)}
          />
        </div>
      </div>

      <div className="flex my-2">
        <div className="w-full">
          <div
            className="flex font-medium text-xl cursor-pointer pb-2"
            onClick={() => navigate(`/advert/${advert.id_annonce}/`)}
          >
            {advert.plantDescription?.substring(0, 10).concat("...")}
          </div>

          <div className="flex pb-2">
            {advert.plantDescription?.substring(0, 100).concat("...")}
          </div>

          <div className="flex pb-2">
            {advert.name}, {advert.species}
          </div>
          <div className="flex justify-between">
            <p>{advert.plantAddress}</p>

            <div
              className="flex items-center pb-6 cursor-pointer"
              onClick={() => navigate(`/account/${advert.userId}/`)}
            >
              <div>
                {advert.user.firstName} {advert.user.lastName}
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
