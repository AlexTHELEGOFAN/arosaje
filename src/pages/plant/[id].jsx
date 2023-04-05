import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

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

// Plant page

const PlantPage = () => {
  const id = window.location.href.slice(-2, -1)

  const [currentPlant, setCurrentPlant] = useState([])

  // const finder = fakeAds.find(e => e.id_plante === id)

  const fetchCurrentPlant = async () => {
    try {
      const res = await axios(
        `https://localhost:7099/api/Plante/GetPlante/${id}`
      )
      setCurrentPlant(res.data)
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
          <div className="pb-4">
            {/* {currentPlant.nom_plante}, {currentPlant.espece_plante} */}
          </div>
          <div className="flex justify-center pb-6">
            <img
              width="100%"
              // src={finder.image_plante}
              alt={currentPlant.id_plante}
              className="drop-shadow-md pb-1 max-w-[411px]"
            />
            <p> Image_plante</p>
          </div>
          <div className="pb-6">
            <p>Adresse : {currentPlant.adresse_plante}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlantPage
