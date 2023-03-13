import * as React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useState } from "react"

const fakeUserPlants = [
  {
    id_plante: 1,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id_plante: 2,
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    id_plante: 3,
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    id_plante: 4,
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    id_plante: 5,
    image: "https://picsum.photos/800/600?random=5",
  },
  {
    id_plante: 6,
    image: "https://picsum.photos/800/600?random=6",
  },
]

// Account page
const AccountPage = () => {
  const [userPlants, setUserPlants] = useState([])

  useEffect(() => {
    setUserPlants(fakeUserPlants)
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
        <div className="mt-2 bg-secondGreen px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <div className="flex items-center pb-6">
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              className="w-5 h-5 pr-4"
            />
            <p>Account username</p>
          </div>
          <div className="pb-6">
            <p>Statut : </p>
            <p>Adresse : </p>
            <p>Adresse email :</p>
            <p>Numéro de téléphone :</p>
            <p>is absent</p>
          </div>

          <div className="">
            <div className="pb-6">
              <Link to="/" className="w-5 h-5 text-black header-button">
                Contacter
              </Link>
            </div>

            <div className="overflow-hidden">
              <div className="pb-4">Plantes de l'utilisateur :</div>
              <div
                className="grid
        sm:gap-3 sm:grid-cols-1
        md:gap-4 md:grid-cols-2
        lg:gap-5 lg:grid-cols-3
        xl:gap-6 xl:grid-cols-3
        2xl:gap-6 2xl:grid-cols-4"
              >
                {userPlants ? (
                  userPlants.map(plant => (
                    <div key={plant.id}>
                      <img
                        width="100%"
                        src={plant.image}
                        alt={plant.id_plante}
                        className="drop-shadow-md pb-1 cursor-pointer max-w-[411px]"
                        onClick={() => navigate(`/plant/${plant.id_plante}/`)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center">
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
