// ** React imports

import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AdCard from '../../components/AdCard'

import Layout from '../../components/layout'
import Spinner from '../../components/Spinner'
import jwtDecode from 'jwt-decode'

// Plant advert page

const Advert = () => {
  const url = window.location.href
  const parts = url.split('/')
  const id = parts[4]

  const [currentAd, setCurrentAd] = useState([])
  const [currentAdImage, setCurrentAdImage] = useState([])
  const [currentAdUser, setCurrentAdUser] = useState([])
  const [adverts, setAdverts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState('')

  const jwt = localStorage.getItem('jwt')

  let decodedToken = ''
  !jwt ?? (decodedToken = jwtDecode(jwt))

  const currentTime = Math.round(new Date().getTime() / 1000)
  let expired = ''
  currentTime > decodedToken.exp ? (expired = true) : (expired = false)

  const fetchCurrentAd = async () => {
    try {
      const resAdvert = await axios.get(
        `https://localhost:7083/api/Annonce/GetAnnonce/${id}`
      )
      setCurrentAd(resAdvert.data)

      const [advertUser, advertImage] = await Promise.all([
        axios.get(
          `https://localhost:7083/api/User/GetUser/${resAdvert.data.userId}`
        ),
        axios.get(
          `https://localhost:7083/api/PlantImage/GetAnnonce/${resAdvert.data.plantId}`
        ),
      ])

      if (advertUser.data.typeId === 1) {
        setType('Propriétaire')
      } else if (advertUser.data.typeId === 2) {
        setType('Botaniste')
      } else if (advertUser.data.typeId === 3) {
        setType('Gardien')
      }

      setCurrentAdUser(advertUser.data)

      setCurrentAdImage(advertImage.data)
    } catch (error) {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const fetchPlants = async () => {
    try {
      const resAds = await axios.get(
        `https://localhost:7083/api/Annonce/GetAnnonces`
      )

      const updatedAdverts = await Promise.all(
        resAds.data
          .filter(advert => advert.plantId !== currentAd?.plantId)
          .map(async advert => {
            try {
              const [userRes, imageRes] = await Promise.all([
                axios.get(
                  `https://localhost:7083/api/User/GetUser/${advert.userId}`
                ),
                axios.get(
                  `https://localhost:7083/api/PlantImage/GetAnnonce/${advert.plantId}`
                ),
              ])

              // create a new advert object that includes the user and image data
              return {
                ...advert,
                user: userRes.data,
                image: imageRes.data,
              }
            } catch (err) {
              console.error(err)
              toast.error('Erreur lors de la récupération des données', {
                position: 'bottom-right',
              })

              // return an empty object to avoid undefined values in the resulting array
              return {}
            }
          })
      )

      // update the state with the new array of adverts
      setAdverts(updatedAdverts)
    } catch {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const initData = async () => {
    await fetchCurrentAd()
    await fetchPlants()
  }

  useEffect(() => {
    initData().then(() => setIsLoading(false))
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
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
          {currentAdImage.image && (
            <img
              width="500px"
              src={
                require(`@assets/images/${currentAdImage?.image}.jpg`).default
              }
              alt={currentAdImage.image}
              className="drop-shadow-md pb-1 cursor-pointer"
              onClick={() => navigate(`/plant/${currentAdImage?.plantId}/`)}
            />
          )}
        </div>

        <div
          className="
        sm:min-w-[200px]
        md:min-w-[250px]
        lg:min-w-[300px]
        xl:min-w-[350px]
        2xl:min-w-[400px]
        
        bg-green-200 px-8 py-5 rounded-md drop-shadow-md"
        >
          <h1 className="text-xl font-semibold mb-[20px]">
            {currentAd?.name}, {currentAd?.species}
          </h1>
          <div className="pb-4">
            <div className="pb-2">{currentAd?.plantDescription}</div>

            <div className="block sm:block lg:text-center lg:flex pb-2">
              <p className="font-medium pr-2">Nom de la plante :</p>
              {currentAd?.name}
            </div>

            <div className="block sm:block lg:text-center lg:flex pb-2">
              <p className="font-medium pr-2">Espèce de la plante :</p>
              {currentAd?.species}
            </div>

            <div className="block sm:block lg:text-center lg:flex pb-2">
              <p className="font-medium pr-2">Adresse de la plante :</p>
              {currentAd?.plantAddress}
            </div>
          </div>

          <div
            className="flex items-center pb-6 cursor-pointer"
            onClick={() => navigate(`/account/${currentAd.userId}/`)}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 pr-2"
            />
            <div>
              {currentAdUser.username}, {type}
            </div>
          </div>

          <button
            className="header-button mb-4"
            onClick={() =>
              expired || jwt === null
                ? toast.error(
                    'Vous devez être connecté pour effectuer cette action',
                    {
                      position: 'bottom-right',
                    }
                  )
                : navigate(`/messages/${currentAd.userId}`)
            }
          >
            Contacter
          </button>

          <div>
            {currentAdUser.status === 0 ? (
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
        {adverts.length ? (
          adverts
            .filter(advert => advert.plantId !== id)
            .map(advert => (
              <div key={advert?.plantId}>
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
