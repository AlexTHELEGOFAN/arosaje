import * as React from "react"
import { navigate } from "gatsby"
import Carousel from "better-react-carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const fakeAds = [
  {
    id_annonce: 1,
    image_annonce:
      "https://jardipartage.b-cdn.net/wp-content/uploads/2018/02/oiseau-du-paradis-en-pot.jpg",
    nom_plante: "Strelitzia",
    espece_plante: "Strelitziaceae",
    adresse_plante: "153 RN 6, 69720 Saint-Bonnet-de-Mure",

    id_proprio: 1,
    nom_proprio: "Charles",
    prenom_proprio: "Delgado",
    adresse_proprio: "6 Rue Georges Clemenceau, 69500 Bron",
    email_proprio: "charles.delgado@gmail.com",
    tel_proprio: "06 03 09 90 70",
  },
  {
    id_annonce: 2,
    image_annonce:
      "https://th.bing.com/th/id/R.9b19622279c69776101ad2ae895d2538?rik=fzS25nnLDFJ9YA&pid=ImgRaw&r=0",
    nom_plante: "Bonsai",
    espece_plante: "Quercus",
    adresse_plante: "125 Bd de Stalingrad, 69100 Villeurbanne",

    id_proprio: 2,
    nom_proprio: "Angelica",
    prenom_proprio: "Beta",
    adresse_proprio: "10 Chem. Petit 10, 69300 Caluire-et-Cuire",
    email_proprio: "angelica.beta@gmail.com",
    tel_proprio: "08 23 09 92 70",
  },
  {
    id_annonce: 3,
    image_annonce:
      "https://th.bing.com/th/id/R.f292873ce1bfec1f32711e8eeb4d3f82?rik=ilJiQDQ3uRqa7g&pid=ImgRaw&r=0",
    nom_plante: "Pivoine",
    espece_plante: "Paeonia obovata",
    adresse_plante: "7 Rue Renan, 69007 Lyon",

    id_proprio: 3,
    nom_proprio: "Da silva",
    prenom_proprio: "Stella",
    adresse_proprio: "2507 Av. de l'Europe 69140 Rillieux-la-Pape",
    email_proprio: "stella.dasilva@gmail.com",
    tel_proprio: "07 88 55 71 61",
  },
]

const HomeCarousel = ({ advert }) => {
  const finder = fakeAds.find(e => e.id_annonce === advert.id_annonce)

  return (
    <Carousel
      cols={3}
      rows={1}
      gap={1}
      scrollSnap={true}
      showDots={true}
      dotColorActive="green"
      dotColorInactive="#c7cccf"
      mobileBreakpoint={768}
      responsiveLayout={[
        {
          breakpoint: 640,
          cols: 1,
        },
        {
          breakpoint: 768,
          cols: 1,
        },
        {
          breakpoint: 1024,
          cols: 1,
        },
        {
          breakpoint: 1380,
          cols: 1,
        },
        {
          breakpoint: 1590,
          cols: 2,
          gap: 1,
        },
      ]}
    >
      {advert ? (
        advert.map(advert => (
          <Carousel.Item>
            <div
              className="pl-[2.5rem] pt-5 pr-0 mr-0
              w-[30%]
              sm:w-[30%]
              md:w-[40%]
              lg:w-[40%]
         xl:w-[50%]
         2xl:w-[75%]
            "
            >
              <div className="pb-2">
                <img
                  width="100%"
                  src={finder?.image_annonce}
                  alt={advert.titre_annonce}
                  className="drop-shadow-md pb-1 cursor-pointer
                  max-w-[411px]
                  "
                  onClick={() => navigate(`/advert/${advert?.id_annonce}/`)}
                />
              </div>

              <div
                className="
                sm:w-[75%]
                md:w-[100%]
                lg:w-[100%]
                xl:w-[100%]
                2xl:w-[100%]"
              >
                <div
                  className="flex font-medium text-xl cursor-pointer pb-2"
                  onClick={() => navigate(`/advert/${advert?.id_annonce}`)}
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
                    onClick={() => navigate(`/account/${advert?.id_annonce}`)}
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
          </Carousel.Item>
        ))
      ) : (
        <p className="text-center">Aucune annonce trouvée</p>
      )}
    </Carousel>
  )
}

export default HomeCarousel
