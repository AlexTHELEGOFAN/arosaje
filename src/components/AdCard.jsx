import React from "react"

// ** Utils

import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

// ** Event card

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

function AdCard({ advert }) {
  const finder = fakeAds.find(e => e.id_annonce === advert.id_annonce)

  return (
    <div
      className="bg-green-100 h-[460px] py-4 pl-7 pr-5
    border-2 border-solid border-lightgrey-200 rounded-2xl mb-5 "
    >
      <div className="flex justify-between items-center align-center">
        <div className="status-tag bg-lightgrey-100 pb-2">
          <img
            src={finder.image_annonce}
            alt={advert.titre_annonce}
            className="bg-green-100 block ml-auto mr-auto max-w-[90%] drop-shadow-md cursor-pointer"
            onClick={() => navigate(`/advert/${advert.id_annonce}/`)}
          />
        </div>
      </div>

      <div className="flex my-2">
        <div className="w-full">
          <div
            className="flex font-medium text-xl cursor-pointer pb-2"
            onClick={() => navigate(`/advert/${advert.id_annonce}/`)}
          >
            {advert.titre_annonce}
          </div>

          <div className="flex pb-2">
            {advert.description_annonce.substring(0, 100).concat("...")}
          </div>

          <div className="flex pb-2">
            {finder.nom_plante} {finder.espece_plante}
          </div>
          <div className="flex justify-between">
            <p>{finder.adresse_plante}</p>

            <div
              className="flex items-center pb-6 cursor-pointer"
              onClick={() => navigate(`/account/${advert?.id}/`)}
            >
              <div>
                {finder.nom_proprio} {finder.prenom_proprio}
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
