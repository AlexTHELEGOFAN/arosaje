// // ** React imports

// import React, { useEffect, useState } from "react"

// // ** Gatsby imports

// // ** Packages

// import { toast } from "react-toastify"
// import Select from "react-select"

// // ** Components

// import Layout from "../../components/layout"
// // import AdCard from "../components/AdCard"

// const fakeAds = [
//   {
//     // I only need the id
//     id_annonce: 1,
//     titre_annonce: "Nourrir Groot",
//     description_annonce:
//       "J'ai besoin que quelqu'un s'occupe de Groot pendant mon absence svp.",
//     image_annonce:
//       "https://static.onecms.io/wp-content/uploads/sites/13/2016/08/15/guardians-of-the-galaxy-baby-groot-scene.jpg",
//     prix_annonce: 20,
//     type_annonce: "Garde",

//     // I only need the id
//     id_plante: 1,
//     nom_plante: "Homme arbre",
//     espece_plante: "Groot",
//     adresse_plante: "Xandar",

//     // I only need the id
//     id_proprio: 1,
//     nom_proprio: "Rocket",
//     prenom_proprio: "Raccoon",
//     absent: false,
//   },
//   {
//     // I only need the id
//     id_annonce: 2,
//     titre_annonce: "Titre annonce",
//     description_annonce: "Description annonce",
//     image_annonce: "https://picsum.photos/800/600?random=2",
//     prix_annonce: 20,
//     type_annonce: "Conseil",

//     // I only need the id
//     id_plante: 2,
//     nom_plante: "nom plante",
//     espece_plante: "espece plante",
//     adresse_plante: "adresse plante",

//     // I only need the id
//     id_proprio: 2,
//     nom_proprio: "nom proprio",
//     prenom_proprio: "prenom proprio",
//     absent: false,
//   },
//   {
//     // I only need the id
//     id_annonce: 3,
//     titre_annonce: "Annonce 3",
//     description_annonce: "Description 3",
//     image_annonce: "https://picsum.photos/800/600?random=3",
//     prix_annonce: 30,
//     type_annonce: "Garde",

//     // I only need the id
//     id_plante: 3,
//     nom_plante: "nom plante 3",
//     espece_plante: "espece plante 3",
//     adresse_plante: "location plante 3",

//     // I only need the id
//     id_proprio: 3,
//     nom_proprio: "nom proprio 3",
//     prenom_proprio: "prenom proprio 3",
//     absent: false,
//   },
//   {
//     // I only need the id
//     id_annonce: 4,
//     titre_annonce: "Annonce 4",
//     description_annonce: "Description 4",
//     image_annonce: "https://picsum.photos/800/600?random=4",
//     prix_annonce: 40,
//     type_annonce: "Conseil",

//     // I only need the id
//     id_plante: 4,
//     nom_plante: "nom plante 4",
//     espece_plante: "espece plante 4",
//     adresse_plante: "location plante 4",

//     // I only need the id
//     id_proprio: 4,
//     nom_proprio: "nom proprio 4",
//     prenom_proprio: "prenom proprio 4",
//     absent: false,
//   },
//   {
//     // I only need the id
//     id_annonce: 5,
//     titre_annonce: "Annonce 5",
//     description_annonce: "Description 5",
//     image_annonce: "https://picsum.photos/800/600?random=5",
//     prix_annonce: 50,
//     type_annonce: "Conseil",

//     // I only need the id
//     id_plante: 5,
//     nom_plante: "nom plante 5",
//     espece_plante: "espece plante 5",
//     adresse_plante: "location plante 5",

//     // I only need the id
//     id_proprio: 5,
//     nom_proprio: "nom proprio 5",
//     prenom_proprio: "prenom proprio 5",
//     absent: false,
//   },
// ]

// const items = [
//   { value: "0", label: "Prix croissant" },
//   { value: "1", label: "Prix décroissant" },
//   { value: "2", label: "Date de mise en ligne" },
// ]

// // ** Results page

// const Results = () => {
//   // const cookies = new Cookies()
//   // const jwt = cookies.get("jwt")

//   // const UrlAPI = process.env.REACT_APP_BASE_URL;

//   const [adverts, setAdverts] = useState([])
//   const [filterAds, setFilterAds] = useState()

//   const fetchAds = async () => {
//     try {
//       // Get all events
//       // const resAds = await axios.get(`${UrlAPI}/api/route`, {
//       //   params: param,
//       // });
//       // const ads = resAds.data.map((advert) => {
//       //   return {
//       //     ...advert,
//       //   };
//       // });
//       setAdverts(fakeAds)
//     } catch {
//       toast.error("Erreur", {
//         position: "bottom-right",
//       })
//     }
//   }

//   const handleFilterChange = e => {
//     // setFilterAds()
//   }

//   useEffect(() => {
//     // fetchEventsCards();
//     // fetchAds()
//     setAdverts(fakeAds)
//     setFilterAds(items)
//   }, [])

//   return (
//     <Layout>
//       <div>
//         <div className="flex justify-between flex-row-reverse py-[20px]">
//           <Select
//             options={filterAds}
//             defaultValue={"2"}
//             onChange={handleFilterChange}
//             placeholder={"Filtres"}
//             className="w-[250px]"
//           />
//         </div>

//         <div className="grid sm:gap-3 sm:grid-cols-2 md:gap-6 md:grid-cols-4">
//           {adverts ? (
//             adverts.map(advert => (
//               <div
//                 // className="w-[10rem] sm:w-[10rem] md:w-[20rem]"
//                 key={advert.id}
//               >
//                 <AdCard advert={advert} />
//               </div>
//             ))
//           ) : (
//             <p className="text-center">Aucune annonce</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Results