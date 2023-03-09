// ** React imports

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQueryParams } from "use-query-params"

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
  const param = window.location.href.slice(-2, -1)
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentAd, setCurrentAd } = useState()

  const fetchCurrentAd = async () => {
    // try {
    //   const resCurrentAd = await axios.get()
    //   setCurrentAd(resCurrentAd.data);
    // } catch {
    //   toast.error("Erreur", {
    //     position: "bottom-right",
    //   })
    // }
  }

  useEffect(() => {
    // fetchCurrentAd()
  }, [])

  return (
    <Layout>
      <button
        className="flex text-center items-center"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2xl"
          className="w-5 h-5 text black mr-5"
        />
        Retour
      </button>

      <div className="flex justify-center">
        <div className="pr-4">
          <img
            width="80%"
            src={
              fakeAds[0].image_annonce
              // currentAd.image_annonce
            }
            alt={
              fakeAds[0].nom_plante
              // currentAd.nom_plante
            }
            className="drop-shadow-md pb-1"
          />
        </div>

        <div>
          <p>
            {
              fakeAds[0].prix_annonce
              // currentAd.prix_annonce
            }{" "}
            €
          </p>
          <h1 className="text-xl font-semibold mb-[40px]">
            {
              fakeAds[0].titre_annonce
              // currentAd.titre_annonce
            }
          </h1>
          <div className="pb-4">
            <p>Nom de la plante : {fakeAds[0].nom_plante}</p>
            <p>Espèce de la plante : {fakeAds[0].espece_plante}</p>
            <p>Adresse de la plante : {fakeAds[0].adresse_plante}</p>
          </div>
          <div className="pb-4">
            <button className="header-button">Garder</button>
            <button className="header-button">Envoyer un conseil</button>
          </div>

          <div>
            {fakeAds[0].nom_proprio} {fakeAds[0].prenom_proprio}
            {fakeAds[0].absent && (
              <p>
                La personne qui possède cette plante est actuellement absente.
              </p>
            )}
            <p>
              <button className="header-button">Contacter</button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Advert
