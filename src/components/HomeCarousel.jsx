import * as React from 'react'
import { navigate } from 'gatsby'
import Carousel from 'better-react-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HomeCarousel = ({ adverts }) => {
  return (
    <Carousel
      cols={3}
      rows={1}
      gap={1}
      scrollSnap={true}
      showDots={true}
      dotColorActive="green"
      dotColorInactive="#133d16"
      mobileBreakpoint={768}
      responsiveLayout={[
        {
          breakpoint: 1380,
          cols: 1,
          gap: 1,
        },
        {
          breakpoint: 1590,
          cols: 2,
          gap: 1,
        },
      ]}
    >
      {adverts.length ? (
        adverts.slice(3, 12).map(advert => (
          <Carousel.Item>
            <div
              className="flex justify-center pt-5 pr-0 pl-0
              sm:pl-[400px]
              md:pl-0
              lg:pl-0
              xl:pl-0      
              "
              key={advert?.plantId}
            >
              <div className="">
                <div className="pb-0">
                  <img
                    src={
                      require(`@assets/images/${advert.image.image}.jpg`)
                        .default
                    }
                    alt={advert.image}
                    className="drop-shadow-md pb-1 cursor-pointer flex justify-center

                  w-[250px]
                  h-[250px]
                  sm:w-[250px]
                  sm:h-[250px]
                  md:w-[250px]
                  md:h-[250px]
                  lg:w-[320px]
                  lg:h-[320px]
         
                  "
                    onClick={() => navigate(`/advert/${advert?.plantId}/`)}
                  />
                </div>
                <div className="pr-2">
                  <div className="flex pb-2">
                    {advert.plantDescription.substring(0, 50).concat('...')}
                  </div>
                  <div className="flex pb-2 font-medium">
                    {advert.name}, {advert.species}
                  </div>
                  <div className="flex justify-between">
                    <div className=" italic">{advert.plantAddress}</div>
                    <div
                      className="flex items-center pb-6 cursor-pointer"
                      onClick={() => navigate(`/account/${advert?.userId}`)}
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
          </Carousel.Item>
        ))
      ) : (
        <p className="text-center">Aucune annonce trouvée</p>
      )}
    </Carousel>
  )
}

export default HomeCarousel
