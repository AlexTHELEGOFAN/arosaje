// ** React imports

import React, { useContext, useEffect, useState } from 'react'

// ** Packages

import { toast } from 'react-toastify'
import Select from 'react-select'

// ** Components

import Layout from '../components/layout'
import HomeCarousel from '../components/HomeCarousel'
import AdCard from '../components/AdCard'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { SearchContext } from '../context/SearchContext'

const items = [
  { value: 1, label: 'Pertinence' },
  { value: 2, label: 'Ordre alphabétique' },
]

// ** Accueil

const HomePage = () => {
  const { searchQuery } = useContext(SearchContext)

  const [adverts, setAdverts] = useState([])
  const [filteredAdverts, setFilteredAdverts] = useState([])

  const [filtersAds, setFiltersAds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [orderBy, setOrderBy] = useState({
    label: 'Pertinence',
    value: 1,
  })

  const fetchPlants = async () => {
    try {
      const resAds = await axios.get(
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
      setAdverts(updatedAdverts)
      setFilteredAdverts(updatedAdverts)
    } catch {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const sortPlants = () => {
    let sortedAdverts = [...filteredAdverts]

    if (searchQuery) {
      sortedAdverts = sortedAdverts.filter(
        advert =>
          advert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          advert.species.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (orderBy.value) {
      if (orderBy.value === 1) {
        sortedAdverts = sortedAdverts.sort((a, b) => b.plantId - a.plantId)
      } else if (orderBy.value === 2) {
        sortedAdverts = sortedAdverts.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      }
    }

    setFilteredAdverts(sortedAdverts)
  }

  const initData = async () => {
    await fetchPlants()
    setFiltersAds(items)
  }

  useEffect(() => {
    initData().then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    sortPlants()
  }, [searchQuery, orderBy.value])

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <div className="">
        <h1 className="text-xl font-semibold mb-[40px]">
          Des milliers d'annonces de plantes
        </h1>

        {/* <div className="grid justify-center"> */}
        <div className="flex justify-center bg-green-200 pb-8 max-h-[536px]">
          <HomeCarousel adverts={adverts} />
        </div>

        <div className="flex justify-between items-center  py-[20px] mb-[40px]">
          <h1 className="text-xl font-semibold">Annonces de plantes</h1>
          <Select
            options={filtersAds}
            defaultValue={'Pertinence'}
            onChange={e => {
              setOrderBy({
                label: e.label,
                value: e.value,
              })
            }}
            placeholder={'Trier par'}
            className="w-[250px]"
            value={orderBy}
          />
        </div>

        <div
          className="grid
            sm:gap-1 sm:grid-cols-1
            md:gap-4 md:grid-cols-2
            lg:gap-5 lg:grid-cols-3
            xl:gap-6 xl:grid-cols-3
            2xl:gap-6 2xl:grid-cols-4"
        >
          {filteredAdverts.length ? (
            filteredAdverts.map(advert => (
              <div key={advert?.plantId}>
                <AdCard advert={advert} />
              </div>
            ))
          ) : (
            <div className="flex pb-8 font-medium text-lg">Aucune annonce</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
