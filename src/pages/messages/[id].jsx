// ** React imports

import React, { useEffect, useState } from "react"

import Layout from "../../components/layout"

const Messages = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <Layout>
      <div className="flex justify-center">
        {/* <div className="pr-4">
          <img
            width="80%"
            src={fakeAds[0].image_annonce}
            alt={fakeAds[0].nom_plante}
            className="drop-shadow-md pb-1"
          />
        </div>

        <div>
          <p>{fakeAds[0].prix_annonce} €</p>
          <h1 className="text-xl font-semibold mb-[40px]">
            {fakeAds[0].titre_annonce}
          </h1>
          <div className="pb-4">
            <p>Nom de la plante : {fakeAds[0].nom_plante}</p>
            <p>Espèce de la plante : {fakeAds[0].espece_plante}</p>
            <p>Adresse de la plante : {fakeAds[0].adresse_plante}</p>
          </div>
          <div className="pb-4">
            <button>Acheter</button>
            <button>Envoyer un message</button>
          </div>

          <div>
            {fakeAds[0].nom_proprio} {fakeAds[0].prenom_proprio}
            {fakeAds[0].absent && (
              <p>
                La personne qui possède cette plante est actuellement absente.
              </p>
            )}
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export default Messages
