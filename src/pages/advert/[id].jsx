// ** React imports

import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useQueryParams } from "use-query-params"
import AdCard from "../../components/AdCard"

import Layout from "../../components/layout"

const fakeAds = [
  {
    // I only need the id
    id_annonce: 1,
    titre_annonce: "Nourrir Groot",
    description_annonce:
      "J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp. J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp.",
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

const otherFakeAds = [
  {
    // I only need the id
    id_annonce: 1,
    titre_annonce: "Nourrir Groot",
    description_annonce:
      "J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp. J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp.",
    image_annonce:
      "https://static.onecms.io/wp-content/uploads/sites/13/2016/08/15/guardians-of-the-galaxy-baby-groot-scene.jpg",
    prix_annonce: 20,
    type_annonce: "Garde",

    // I only need the id
    id_plante: 1,
    nom_plante: "Homme arbre",
    espece_plante: "Groot",
    adresse_plante: "Xandar",

    // I only need the id
    id_proprio: 1,
    nom_proprio: "Rocket",
    prenom_proprio: "Raccoon",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 2,
    titre_annonce: "Titre annonce",
    description_annonce: "Description annonce",
    image_annonce: "https://picsum.photos/800/600?random=2",
    prix_annonce: 20,
    type_annonce: "Conseil",

    // I only need the id
    id_plante: 2,
    nom_plante: "nom plante",
    espece_plante: "espece plante",
    adresse_plante: "adresse plante",

    // I only need the id
    id_proprio: 2,
    nom_proprio: "nom",
    prenom_proprio: "prenom",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 3,
    titre_annonce: "Annonce 3",
    description_annonce: "Description 3",
    image_annonce: "https://picsum.photos/800/600?random=3",
    prix_annonce: 30,
    type_annonce: "Garde",

    // I only need the id
    id_plante: 3,
    nom_plante: "nom plante 3",
    espece_plante: "espece plante 3",
    adresse_plante: "location plante 3",

    // I only need the id
    id_proprio: 3,
    nom_proprio: "nom proprio 3",
    prenom_proprio: "prenom proprio 3",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 4,
    titre_annonce: "Annonce 4",
    description_annonce: "Description 4",
    image_annonce: "https://picsum.photos/800/600?random=4",
    prix_annonce: 40,
    type_annonce: "Conseil",

    // I only need the id
    id_plante: 4,
    nom_plante: "nom plante 4",
    espece_plante: "espece plante 4",
    adresse_plante: "location plante 4",

    // I only need the id
    id_proprio: 4,
    nom_proprio: "nom proprio 4",
    prenom_proprio: "prenom proprio 4",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 5,
    titre_annonce: "Annonce 5",
    description_annonce: "Description 5",
    image_annonce: "https://picsum.photos/800/600?random=5",
    prix_annonce: 50,
    type_annonce: "Conseil",

    // I only need the id
    id_plante: 5,
    nom_plante: "nom plante 5",
    espece_plante: "espece plante 5",
    adresse_plante: "location plante 5",

    // I only need the id
    id_proprio: 5,
    nom_proprio: "nom proprio 5",
    prenom_proprio: "prenom proprio 5",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 5,
    titre_annonce: "Annonce 5",
    description_annonce: "Description 5",
    image_annonce: "https://picsum.photos/800/600?random=5",
    prix_annonce: 50,
    type_annonce: "Conseil",

    // I only need the id
    id_plante: 5,
    nom_plante: "nom plante 5",
    espece_plante: "espece plante 5",
    adresse_plante: "location plante 5",

    // I only need the id
    id_proprio: 5,
    nom_proprio: "nom proprio 5",
    prenom_proprio: "prenom proprio 5",
    absent: false,
  },
  {
    // I only need the id
    id_annonce: 5,
    titre_annonce: "Annonce 5",
    description_annonce: "Description 5",
    image_annonce: "https://picsum.photos/800/600?random=5",
    prix_annonce: 50,
    type_annonce: "Conseil",

    // I only need the id
    id_plante: 5,
    nom_plante: "nom plante 5",
    espece_plante: "espece plante 5",
    adresse_plante: "location plante 5",

    // I only need the id
    id_proprio: 5,
    nom_proprio: "nom proprio 5",
    prenom_proprio: "prenom proprio 5",
    absent: false,
  },
]

const Advert = () => {
  const param = window.location.href.slice(-2, -1)
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentAd, setCurrentAd } = useState()
  const [adverts, setAdverts] = useState([])

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

  const fetchAds = async () => {
    try {
      // Get all events
      // const resAds = await axios.get(`${UrlAPI}/api/route`, {
      //   params: param,
      // });
      // const ads = resAds.data.map((advert) => {
      //   return {
      //     ...advert,
      //   };
      // });
      setAdverts(otherFakeAds)
    } catch {
      toast.error("Erreur", {
        position: "bottom-right",
      })
    }
  }

  useEffect(() => {
    setAdverts(otherFakeAds)
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

      <div className="flex justify-center pb-40">
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

        <div className="w-[20%]">
          <h1 className="text-xl font-semibold mb-[40px]">
            {fakeAds[0].titre_annonce}
          </h1>
          <div className="pb-4">
            <div className="pb-2">{fakeAds[0].description_annonce}</div>
            <div className="pb-2">
              Nom de la plante : {fakeAds[0].nom_plante}
            </div>
            <div className="pb-2">
              Espèce de la plante : {fakeAds[0].espece_plante}
            </div>
            <div>Adresse de la plante : {fakeAds[0].adresse_plante}</div>
          </div>
          <div className="pb-4 flex justify-between">
            <button className="header-button">Garder</button>
            <button className="header-button">Conseiller</button>
          </div>

          <div
            className="flex items-center pb-6 cursor-pointer"
            onClick={() => navigate(`/account/${fakeAds[0].id_proprio}/`)}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 pr-2"
            />
            <div>
              {fakeAds[0].nom_proprio} {fakeAds[0].prenom_proprio}
            </div>
          </div>

          <button className="header-button">Contacter</button>

          <div>
            {fakeAds[0].absent ? (
              <p>
                La personne qui possède cette plante est actuellement absente.
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold pb-5">Autres annonces</h1>
      <div
        className="grid
        sm:gap-3 sm:grid-cols-1
        md:gap-4 md:grid-cols-2
        lg:gap-5 lg:grid-cols-3
        xl:gap-6 xl:grid-cols-3
        2xl:gap-6 2xl:grid-cols-4"
      >
        {adverts ? (
          adverts.map(advert => (
            <div key={advert.id}>
              <AdCard advert={advert} />
            </div>
          ))
        ) : (
          <p className="text-center">Aucune annonce</p>
        )}
      </div>
    </Layout>
  )
}

export default Advert
