import * as React from "react"
import { Link } from "gatsby"
import Carousel from "better-react-carousel"

const HomeCarousel = ({ advert }) => {
  console.log(advert)

  return (
    <Carousel
      cols={3}
      rows={1}
      gap={50}
      scrollSnap={true}
      showDots={true}
      dotColorActive="green"
      dotColorInactive="#c7cccf"
    >
      {advert ? (
        advert.map(advert => (
          <Carousel.Item>
            <div className="pl-[2.5rem] pt-5">
              <img
                // width="90%"
                src={advert.image_annonce}
                alt={advert.nom_plante}
                className="drop-shadow-md pb-1"
              />
              <div className="">
                <div className="flex font-medium text-xl">
                  {advert.titre_annonce}
                </div>
                <div className="flex pb-1">{advert.prix_annonce} €</div>
                <div className="flex justify-between">
                  <p>{advert.adresse_plante}</p>
                  <div>
                    {advert.nom_proprio} {advert.prenom_proprio}
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
