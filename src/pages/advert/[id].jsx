// ** React imports

import React, { useState } from "react"

import Layout from "../../components/layout"

const fakeAds = [
  {
    // I only need the id
    id_annonce: 1,
    titre_annonce: "Nourrir Groot",
    description_annonce:
      "J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp.",
    image_annonce:
      "https://static.onecms.io/wp-content/uploads/sites/13/2016/08/15/guardians-of-the-galaxy-baby-groot-scene.jpg",
    prix_annonce: 20,

    // I only need the id
    id_plante: 1,
    nom_plante: "Groot",
    espece_plante: "Homme arbre",
    adresse_plante: "Xandar",

    // I only need the id
    id_proprio: 1,
    nom_proprio: "Rocket",
    prenom_proprio: "Raccoon",
    absent: false,
  },
]

const Advert = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentAd, setCurrentAd } = useState()

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="pr-4">
          <img
            width="80%"
            src={fakeAds[0].image_annonce}
            alt={fakeAds[0].nom_plante}
            className="drop-shadow-md pb-1"
          />
        </div>

        <div>
          <p>{fakeAds[0].prix_annonce} €</p>
          <h1 className="text-xl font-semibold mb-[40px]">
            {fakeAds[0].titre_annonce}
          </h1>
          <div className="pb-4">
            <p>Nom de la plante : {fakeAds[0].nom_plante}</p>
            <p>Espèce de la plante : {fakeAds[0].espece_plante}</p>
            <p>Adresse de la plante : {fakeAds[0].adresse_plante}</p>
          </div>
          <div className="pb-4">
            <button>Acheter</button>
            <button>Envoyer un message</button>
          </div>

          <div>
            {fakeAds[0].nom_proprio} {fakeAds[0].prenom_proprio}
            {fakeAds[0].absent && (
              <p>
                La personne qui possède cette plante est actuellement absente.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Advert
