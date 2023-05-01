import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'

// Plant page

const PlantPage = () => {
  const url = window.location.href
  const parts = url.split('/')
  const id = parts[4]

  const user = parseInt(localStorage.getItem('user'))

  const [currentPlant, setCurrentPlant] = useState([])
  const [plantImage, setPlantImage] = useState()
  const [isLoading, setIsLoading] = useState(true)

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
      setPlantImage(res.data)
    } catch {
      toast.error('Erreur', {
        position: 'bottom-right',
      })
    }
  }

  const deletePlant = async () => {
    try {
      await axios
        .delete(`https://localhost:7083/api/PlantImage/DeletePlant/${id}`)
        .then(
          await axios.delete(
            `https://localhost:7083/api/Annonce/DeletePlant/${id}`
          )
        )
      toast.success('Votre annonce a été supprimée', {
        position: 'bottom-right',
      })
      navigate('/home')
    } catch {
      toast.error('Erreur', {
        position: 'bottom-right',
      })
    }
  }

  const initData = async () => {
    await fetchCurrentPlant()
    await fetchCurrentPlantInfos()
  }

  useEffect(() => {
    initData().then(() => setIsLoading(false))
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <button
        className="flex text-center items-center"
        onClick={
          () => navigate(-1)
          // setTimeout(() => {
          //   window.location.reload()
          // }, 10)
        }
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2xl"
          className="w-5 h-5 text black mr-5"
        />
        Retour
      </button>

      <div className="flex justify-center items-center">
        <div className="mt-2 mb-8 bg-green-200 px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <div className="pb-4">
            {currentPlant.name}, {currentPlant.species}
          </div>

          <div className="flex justify-center pb-6">
            <div className="pb-2">
              {plantImage?.image && (
                <img
                  width="100%"
                  src={
                    require(`@assets/images/${plantImage?.image}.jpg`).default
                  }
                  alt={plantImage?.image}
                  className="drop-shadow-md pb-1 cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="flex text-center pb-6">
            <p className="font-medium pr-2">Adresse :</p>{' '}
            {currentPlant.plantAddress}
            {currentPlant.userId === user && (
              <button
                className="flex text-center items-center"
                onClick={deletePlant}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size="2xl"
                  className="absolute w-6 h-6 right-4 cursor-pointer"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlantPage
