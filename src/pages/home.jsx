// ** React imports

import React, { useContext, useEffect, useState } from "react"

// ** Gatsby imports

// ** Packages

import { toast } from "react-toastify"
import Select from "react-select"

// ** Components

import Layout from "../components/layout"
import HomeCarousel from "../components/HomeCarousel"
import AdCard from "../components/AdCard"
import axios from "axios"
import { SearchContext } from "../context/SearchContext"

const items = [
  { value: "1", label: "Pertinence" },
  { value: "2", label: "Date de mise en ligne" },
]

// ** Accueil

const HomePage = () => {
  // const { search } = useContext(SearchContext)
  const [filtersAds, setFiltersAds] = useState()

  const config = {
    // "Access-Control-Allow-Origin": "*",
  }
  const [adverts, setAdverts] = useState([])

  const fetchPlants = async () => {
    try {
      const resAds = await axios(
        `https://localhost:7083/api/Annonce/GetAnnonces`,
        {
          headers: config,
        }
      )

      const updatedAdverts = await Promise.all(
        resAds.data.map(async advert => {
          try {
            const [userRes, imageRes] = await Promise.all([
              axios.get(
                `https://localhost:7083/api/User/GetUser/${advert.userId}`,
                {
                  headers: config,
                }
              ),
              axios.get(
                `https://localhost:7083/api/PlantImage/GetAnnonce/${advert.plantId}`,
                {
                  headers: config,
                }
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
            toast.error("Erreur lors de la récupération des données", {
              position: "bottom-right",
            })

            // return an empty object to avoid undefined values in the resulting array
            return {}
          }
        })
      )

      // update the state with the new array of adverts
      setAdverts(updatedAdverts)
    } catch {
      toast.error("Erreur lors du chargement des données", {
        position: "bottom-right",
      })
    }
  }

  const handleFilterChange = e => {
    setFiltersAds(adverts)
  }

  useEffect(async () => {
    await fetchPlants()
    setFiltersAds(items)
  }, [])

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold mb-[40px]">
          Des milliers d'annonces de plantes
        </h1>

        {/* <div className="grid justify-center"> */}
        <div className="flex items-center bg-secondGreen px-5 pb-8 max-h-[536px]">
          <HomeCarousel advert={adverts} />
        </div>

        <div className="flex justify-between items-center  py-[20px] mb-[40px]">
          <h1 className="text-xl font-semibold ">Annonces de plantes</h1>
          <Select
            options={filtersAds}
            defaultValue={"2"}
            onChange={handleFilterChange}
            placeholder={"Trier par"}
            className="w-[250px]"
          />
        </div>

        <div
          className="grid
        sm:gap-3 sm:grid-cols-1
        md:gap-4 md:grid-cols-2
        lg:gap-5 lg:grid-cols-3
        xl:gap-6 xl:grid-cols-3
        2xl:gap-6 2xl:grid-cols-4"
        >
          {adverts.length ? (
            adverts.map(advert => (
              <div key={advert?.plantId}>
                <AdCard advert={advert} />
              </div>
            ))
          ) : (
            <p className="text-center">Aucune annonce</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
