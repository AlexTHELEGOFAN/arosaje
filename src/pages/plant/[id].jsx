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
    nom_plante: "nom de la plante",
    espece_plante: "espece de la plante",
    adresse_plante: "adresse de la plante",
  },
]

// Account page
const PlantPage = () => {
  const param = window.location.href.slice(-2, -1)

  const [currentPlant, setCurrentPlant] = useState([])

  const fetchCurrentPlant = async () => {
    // try {
    //   const res = await axios.get()
    //   setCurrentPlant(res.data);
    // } catch {
    //   toast.error("Erreur", {
    //     position: "bottom-right",
    //   })
    // }
  }

  useEffect(() => {
    setCurrentPlant(fakeUserPlants)
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
            {fakeUserPlants[0].nom_plante}, {fakeUserPlants[0].espece_plante}
          </div>
          <div className="flex justify-center pb-6">
            <img
              width="100%"
              src={fakeUserPlants[0].image}
              alt={fakeUserPlants[0].id_plante}
              className="drop-shadow-md pb-1 cursor-pointer max-w-[411px]"
            />
          </div>
          <div className="pb-6">
            <p>Adresse : {fakeUserPlants[0].adresse_plante}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlantPage
