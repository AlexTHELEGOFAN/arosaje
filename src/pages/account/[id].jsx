import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from '../../components/Spinner'

// Account page
const AccountPage = () => {
  const url = window.location.href
  const parts = url.split('/')
  const id = parts[4]

  const [user, setUser] = useState()
  const [userPlants, setUserPlants] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [userType, setUserType] = useState()

  const fetchUser = async () => {
    try {
      await axios(`https://localhost:7083/api/User/GetUser/${id}`).then(
        response => setUser(response.data)
      )
    } catch {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const fetchUserPlants = async () => {
    try {
      const resAds = await axios(
        `https://localhost:7083/api/Annonce/GetAnnonces`
      )

      const updatedAdverts = await Promise.all(
        resAds.data.map(async advert => {
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
      setUserPlants(updatedAdverts.filter(e => e.userId === id))
    } catch {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  useEffect(async () => {
    await fetchUser()
    await fetchUserPlants()
    setIsLoading(false)
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <button
        className="flex text-center items-center"
        onClick={() => (
          navigate(-1),
          setTimeout(() => {
            window.location.reload()
          }, 10)
        )}
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
          <div className="flex items-center pb-6">
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 pr-4"
            />
            <div className="font-medium text-lg">{user?.username}</div>
            <div className=""></div>
          </div>
          <div className="pb-6">
            <div className="flex text-center">
              <p className="font-medium pr-2">Statut :</p>
              {user?.status === 0 ? 'Inactif' : 'Actif'}
            </div>
            {/* <div className="flex text-center">
              <p className="font-medium pr-2">Adresse :</p>
              {user?.userAddress}
            </div>
            <div className="flex text-center">
              <p className="font-medium pr-2">Adresse email :</p>
              {user?.email}
            </div> */}
            <div className="flex text-center">
              <p className="font-medium pr-2">Numéro de téléphone :</p>
              {user?.phone}
            </div>
          </div>

          <div className="">
            <button
              className="header-button mb-4"
              onClick={() => (
                navigate(`/messages/1`),
                setTimeout(() => {
                  window.location.reload()
                }, 1000)
              )}
            >
              Contacter
            </button>

            <div className="overflow-hidden">
              <div className="pb-4">Plantes de l'utilisateur :</div>
              <div
                className="grid
        sm:gap-3 sm:grid-cols-1
        md:gap-4 md:grid-cols-2
        lg:gap-5 lg:grid-cols-3
        xl:gap-6 xl:grid-cols-3
        2xl:gap-10 2xl:grid-cols-3"
              >
                {userPlants.length ? (
                  userPlants.map(plant => (
                    <div className="pt-5 pr-0 " key={plant?.plantId}>
                      <div className="pb-2">
                        <img
                          src={
                            require(`@assets/images/${plant.image.image}.jpg`)
                              .default
                          }
                          alt={plant.name + ' ' + plant.species}
                          className="drop-shadow-md pb-1 cursor-pointer max-w-[300px]"
                          onClick={() => (
                            navigate(`/plant/${plant.plantId}/`),
                            setTimeout(() => {
                              window.location.reload()
                            }, 1000)
                          )}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="flex text-center">
                    Cet utilisateur n'a aucune plante
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AccountPage
