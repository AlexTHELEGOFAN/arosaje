// ** React imports

import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import AdCard from "../../components/AdCard"

import Layout from "../../components/layout"

const fakeAds = [
  {
    id_annonce: 1,
    image_annonce:
      "https://jardipartage.b-cdn.net/wp-content/uploads/2018/02/oiseau-du-paradis-en-pot.jpg",

    id_plante: 1,
    nom_plante: "Oiseau de paradis",
    espece_plante: "Strelitzia",
    adresse_plante: "2 Bd Marius Vivier Merle",
    nom_proprio: "Paul",
    prenom_proprio: "Smith",
  },
  {
    id_annonce: 2,
    image_annonce:
      "https://th.bing.com/th/id/R.9b19622279c69776101ad2ae895d2538?rik=fzS25nnLDFJ9YA&pid=ImgRaw&r=0",

    id_plante: 2,
    nom_plante: "Bonsaï",
    espece_plante: "Nain",
    adresse_plante: "1 Bd Marius Vivier Merle",
    nom_proprio: "Jean",
    prenom_proprio: "Dupont",
  },
  {
    id_annonce: 3,
    image_annonce:
      "https://th.bing.com/th/id/R.f292873ce1bfec1f32711e8eeb4d3f82?rik=ilJiQDQ3uRqa7g&pid=ImgRaw&r=0",

    id_plante: 3,
    nom_plante: "Pivoine",
    espece_plante: "Rose",
    adresse_plante: "3 Bd Marius Vivier Merle",
    nom_proprio: "Marc",
    prenom_proprio: "Dulac",
  },
]

const Advert = () => {
  const id = window.location.href.slice(-2, -1)
  const [currentAd, setCurrentAd] = useState()
  const [adverts, setAdverts] = useState([])

  const fetchCurrentAd = async () => {
    try {
      const resCurrentAd = await axios(
        `https://localhost:7099/api/Annonce/GetAnnonce/${id}`
      )
      setCurrentAd(resCurrentAd.data)
    } catch {
      toast.error("Erreur lors du chargement des données", {
        position: "bottom-right",
      })
    }
  }

  const fetchAds = async () => {
    try {
      // Get all events
      const resAds = await axios(
        `https://localhost:7099/api/Annonce/GetAnnonces`
      )
      const ads = resAds.data.map(advert => {
        return {
          ...advert,
        }
      })
      setAdverts(ads.filter(e => e.id_annonce !== id))
    } catch {
      toast.error("Erreur lors du chargement des données", {
        position: "bottom-right",
      })
    }
  }

  const finder = fakeAds.find(e => e.id_annonce === currentAd?.id_annonce)

  useEffect(async () => {
    await fetchCurrentAd()
    await fetchAds()
  }, [])

  return (
    <Layout>
      <button
        className="flex text-center items-center pb-6"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2xl"
          className="w-5 h-5 text black mr-5"
        />
        Retour
      </button>

      <div className="flex justify-between pb-20">
        <div className="pr-2">
          <img
            width="80%"
            src={finder?.image_annonce}
            alt={finder?.nom_plante}
            className="drop-shadow-md pb-1 cursor-pointer"
            onClick={() => navigate(`/plant/${finder?.id_plante}/`)}
          />
        </div>

        <div
          className="
        sm:min-w-[200px]
        md:min-w-[250px]
        lg:min-w-[300px]
        xl:min-w-[350px]
        2xl:min-w-[400px]
        
        bg-secondGreen px-8 py-5 rounded-md drop-shadow-md"
        >
          <h1 className="text-xl font-semibold mb-[40px]">
            {currentAd?.titre_annonce}
          </h1>
          <div className="pb-4">
            <div className="pb-2">{currentAd?.description_annonce}</div>
            <div className="pb-2">
              Nom de la plante : {fakeAds[0].nom_plante}
            </div>
            <div className="pb-2">
              Espèce de la plante : {fakeAds[0].espece_plante}
            </div>
            <div>Adresse de la plante : {fakeAds[0].adresse_plante}</div>
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

          <button
            className="header-button"
            onClick={() => navigate(`/messages/1`)}
          >
            Contacter
          </button>

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
