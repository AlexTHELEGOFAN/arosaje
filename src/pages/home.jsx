// ** React imports

import React, { useEffect, useState } from "react"

// ** Gatsby imports

import { Link } from "gatsby"

// ** Utils

import Layout from "../components/layout"
import axios from "axios"
import Cookies from "universal-cookie"
// import EventCard from '../components/eventCard';
import { toast } from "react-toastify"
import HomeCarousel from "../components/HomeCarousel"
import Select from "react-select"
import ReactSelect from "react-select"
import AdCard from "../components/AdCard"

// ** Components

const fakeAds = [
  {
    title: "Ad 1 title",
    plant: "plant1",
    img: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Ad 2 title",
    plant: "plant2",
    img: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Ad 3 title",
    plant: "plant3",
    img: "https://picsum.photos/800/600?random=3",
  },
]

const items = [
  { value: "0", label: "Prix croissant" },
  { value: "1", label: "Prix décroissant" },
  { value: "2", label: "Date de mise en ligne" },
]

const HomePage = () => {
  const cookies = new Cookies()
  const jwt = cookies.get("jwt")

  const [adverts, setAdverts] = useState([])
  const [filterAds, setFilterAds] = useState()

  // const UrlAPI = process.env.REACT_APP_BASE_URL;
  // const config = {
  //   Authorization: `Bearer ${jwt}`,
  //   'Access-Control-Allow-Origin': '*',
  // };

  // const fetchAdsCards = async () => {
  //   try {
  //     // Get all events
  //     const res = await axios.get(`${UrlAPI}/api/Evenement`, {
  //       headers: config,
  //     });
  //     const ads = res.data.map((event) => {
  //       return {
  //         ...event,
  //       };
  //     });
  //     setAds(events);
  //   } catch {
  //     toast.error('Erreur', {
  //       position: 'bottom-right',
  //     });
  //   }
  // };

  const handleFilterChange = e => {
    // setFilterAds()
  }

  useEffect(() => {
    // fetchEventsCards();
    setAdverts(fakeAds)
    setFilterAds(items)
  }, [])

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold mb-[40px]">
          Des milliers d'annonces de plantes
        </h1>

        {/* <div className="grid justify-center"> */}
        <div className="flex items-center bg-green-100 px-5 pb-8">
          <HomeCarousel ads={adverts} />
        </div>

        <div className="flex justify-between flex-row-reverse pt-[20px]">
          <Select
            options={filterAds}
            defaultValue={"2"}
            onChange={handleFilterChange}
            placeholder={"Filtres"}
            className="w-[250px]"
          />
        </div>

        <div className="flex justify-between">
          {/* {events ? (
            events.map((event) => ( */}
          <div
            className="w-[10rem] sm:w-[10rem] md:w-[30rem]"
            // key={event.id}
          >
            {/* advert={advert} */}
            <AdCard ads={adverts} />
            <AdCard ads={adverts} />
            <AdCard ads={adverts} />
          </div>
          {/* ))
          ) : (
            <p className='text-center'>Aucun évènement</p>
          )} */}
        </div>
      </div>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default HomePage
