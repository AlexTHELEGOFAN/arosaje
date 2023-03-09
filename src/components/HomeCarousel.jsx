import * as React from "react"
import { Link, navigate } from "gatsby"
import Carousel from "better-react-carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const HomeCarousel = ({ advert }) => {
  // console.log(advert)

  return (
    <Carousel
      cols={3}
      rows={1}
      gap={1}
      scrollSnap={true}
      showDots={true}
      dotColorActive="green"
      dotColorInactive="#c7cccf"
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 1,
          loop: true,
          autoplay: 1000,
        },
      ]}
    >
      {advert ? (
        advert.map(advert => (
          <Carousel.Item>
            <div className="pl-[2.5rem] pt-5">
              <div>
                <img
                  width="90%"
                  src={advert.image_annonce}
                  alt={advert.nom_plante}
                  className="drop-shadow-md pb-1 cursor-pointer"
                  onClick={() => navigate(`/advert/${advert?.id_annonce}/`)}
                />
              </div>

              <div className="w-[90%]">
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
                      onClick={() => navigate(`/account/${advert?.id}/`)}
                    />
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
