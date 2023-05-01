import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Account page
const LegalNotice = () => {
  return (
    <Layout>
      <button
        className="flex text-center items-center"
        onClick={() =>
          navigate(-1)
          // setTimeout(() => {
          //   window.location.reload()
          // }, 10)
        }
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
          <h1 className="flex justify-center items-center pb-2 font-bold">
            Mentions légales
          </h1>
          <div>
            <p className="pb-1">N° de TVA intracommunautaire : FR523277</p>
            <p className="pb-1">SIRET :</p>
            <p className="pb-1">APE : 0210Z</p>
            <p className="pb-1">Numéro enregistrement DRAAF : FR AQ </p>
            <p className="pb-1">
              Directeur de la publication : Alexandre Pozzi
            </p>
            <p className="pb-1">
              Prestataire technique (hébergeur) : Le site www.Arosa'je.fr est
              hébergé par la société OVH 2 rue Kellermann - 59100 Roubaix -
              France
            </p>
            <p className="pt-8 pb-1 font-semibold">
              • Informations légales relatives à l'Index égalité professionnelle
              femmes-hommes
            </p>
            <p className="pb-1">
              <p className="pb-1">Protection des donnees personnelles : </p>{' '}
              Toutes les données que vous nous confiez sont utilisées afin de
              pouvoir traiter vos commandes et ne seront en aucun cas
              réutilisées en dehors de notre société ou distribuées à qui que ce
              soit. En vertu de la loi n°78-17 du 6 janvier 1978 relative à
              l'informatique, aux fichiers et aux libertés, vous disposez auprès
              de notre service Clients d'un droit d'accès, de consultation, de
              modification, de rectification ou de suppression des données que
              vous nous avez communiquées.
            </p>
            <p className="pt-8 pb-1 font-semibold">
              • En savoir plus sur la Protection des donnees personnelles
            </p>
            <p className="pb-1">Utilisation des cookies :</p>
            Lors de la consultation de notre site Arosa'je.fr, des cookies sont
            déposés sur votre ordinateur, votre mobile ou votre tablette. Notre
            site est conçu pour être particulièrement attentif aux besoins et
            attentes de nos clients. C'est entre autres pour cela que nous
            faisons usage de cookies afin par exemple de vous identifier et
            accéder à votre compte, gérer votre panier de commande.
            <p className="pt-8 pb-1 font-semibold">
              • En savoir plus sur les cookies
            </p>
            <p className="pb-1">Conditions générales de vente :</p>
            Le présent site www.Arosa'je.fr est la propriété de la société
            S.A.S. Arosa'je, ainsi que l'ensemble des droits y afférents. Toute
            reproduction, intégrale ou partielle, est obligatoirement soumise à
            l'autorisation des propriétaires. Toutefois, les liaisons du type
            hypertexte vers le site sont autorisées sans demandes spécifiques.
            Le fait de passer commande implique l'acceptation sans réserve des
            conditions de vente et aux prix indiqués sur le site. Arosa'je
            s'engage réciproquement à respecter les obligations lui incombant.
            Ces présentes conditions s'appliquent exclusivement à toutes les
            commandes passées via les sites www.Arosa'je.fr, www.Arosa'je.es et
            www.Arosa'je.co.uk en ligne ou par téléphone.
            <p className="pt-8 pb-1 font-semibold">
              • Voir les Conditions générales de vente
            </p>
            <p className="pb-1">
              <p className="pb-1">Crédits photos, illustrations, vidéos : </p>{' '}
              Arosa'je.fr, bgmedias.fr, commons.wikimedia.org, flickr.com,
              fotolia.com, Franck Boucourt, Jean-Michel Groult, picsell-pro.fr,
              shutterstock.com, stock.adobe.com, visionspictures.com
              <p className="py-1">
                Mise à jour : 10-03-2023 © Copyright 2023 Arosa'je
              </p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LegalNotice
