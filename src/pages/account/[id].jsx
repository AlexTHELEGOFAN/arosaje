import * as React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const fakeAds = [
  {
    image_plante:
      "https://i1.wp.com/bklynorchids.com/wp-content/uploads/2012/04/img_1559.jpg",
    id_plante: 1,
  },
  {
    image_plante:
      "https://th.bing.com/th/id/R.9b19622279c69776101ad2ae895d2538?rik=fzS25nnLDFJ9YA&pid=ImgRaw&r=0",
    id_plante: 2,
  },
  {
    image_plante: "https://garden.org/pics/2016-05-30/NMay/40d016.jpg",
    id_plante: 3,
  },
  {
    image_plante:
      "https://th.bing.com/th/id/R.f576cd881ec4a9bc85a1416c061ff8cf?rik=5mZFuorNYx4f5A&pid=ImgRaw&r=0",
    id_plante: 4,
  },
  {
    image_plante:
      "https://th.bing.com/th/id/OIP.K_yewd255RL3bxp3ThBYsQHaKI?pid=ImgDet&rs=1",
    id_plante: 5,
  },
  {
    image_plante:
      "https://jardipartage.b-cdn.net/wp-content/uploads/2018/02/oiseau-du-paradis-en-pot.jpg",
    id_plante: 6,
  },
]

// Account page
const AccountPage = () => {
  const [userPlants, setUserPlants] = useState()

  const fetchCurrentPlant = async () => {
    try {
      const res = await axios(`https://localhost:7099/api/Plante/GetPlantes`)
      setUserPlants(res.data)
    } catch {
      toast.error("Erreur", {
        position: "bottom-right",
      })
    }
  }

  useEffect(async () => {
    await fetchCurrentPlant()
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
            <p>Alexandre Pozzi</p>
          </div>
          <div className="pb-6">
            <p>Statut : Présent</p>
            <p>Adresse : 1 Rue de la technologie</p>
            <p>Adresse email : alexandre.pozzi69@gmail.com</p>
            <p>Numéro de téléphone : 06 28 79 52 47</p>
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
                    <div key={plant.id_plante}>
                      {console.log(plant)}
                      <img
                        width="100%"
                        src={fakeAds[0].image_plante}
                        alt={plant.nom_plante + " " + plant.espece_plante}
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
