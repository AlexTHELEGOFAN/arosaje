import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// Plant page

const PlantPage = () => {
  const id = parseInt(window.location.href.slice(-2, -1))

  const [currentPlant, setCurrentPlant] = useState([])
  const [plantImage, setPlantImage] = useState()

  const fetchCurrentPlantInfos = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7083/api/Annonce/GetAnnonce/${id}`
      )
      setCurrentPlant(res.data)
    } catch {
      toast.error('Erreur', {
        position: 'bottom-right',
      })
    }
  }

  const fetchCurrentPlant = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7083/api/PlantImage/GetAnnonce/${id}`
      )
      console.log(res)
      setPlantImage(res)
    } catch {
      toast.error('Erreur', {
        position: 'bottom-right',
      })
    }
  }

  console.log('currentPlant', currentPlant)

  useEffect(async () => {
    await fetchCurrentPlant()
    await fetchCurrentPlantInfos()
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

      <div className="flex justify-center items-center">
        <div className="mt-2 bg-green-200 px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <div className="pb-4">
            {/* {currentPlant.nom_plante}, {currentPlant.espece_plante} */}
          </div>

          {/* <div className="flex justify-center pb-6">
            <div className="pb-2">
              <img
                src={
                  require(`@assets/images/${plantImage?.image?.image}.jpg`)
                    .default
                }
                alt={currentPlant.name + " " + currentPlant.species}
                className="drop-shadow-md pb-1 cursor-pointer max-w-[300px]"
                onClick={() => navigate(`/plant/${currentPlant.plantId}/`)}
              />
            </div>
          </div> */}

          <div className="flex text-center pb-6">
            <p className="font-medium pr-2">Adresse :</p>{' '}
            {currentPlant.plantAddress}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlantPage
