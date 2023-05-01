import React from 'react'

// ** Utils

import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// ** Event card

const AdCard = ({ advert }) => {
  // An ad without image won't work
  const imageSrc = require(`@assets/images/${advert.image.image}.jpg`).default

  return (
    <div className="bg-green-200 h-[560px] rounded-2xl mb-5">
      <div className="flex justify-between items-center align-center">
        <img
          src={imageSrc}
          alt={advert.image.image}
          className="bg-green-100 block ml-auto mr-auto w-full h-full rounded-t-2xl drop-shadow-md cursor-pointer"
          onClick={() => (
            navigate(`/advert/${advert.plantId}/`),
            setTimeout(() => {
              window.location.reload()
            }, 400)
          )}
        />
      </div>

      <div className="flex my-2 py-4 pl-7 pr-5">
        <div className="w-full">
          <div className="flex pb-2">
            {advert.plantDescription?.substring(0, 50).concat('...')}
          </div>

          <div className="flex pb-2 font-medium">
            {advert.name}, {advert.species}
          </div>
          <div className="flex justify-between">
            <div className=" italic">{advert.plantAddress}</div>

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
