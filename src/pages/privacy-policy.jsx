import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Account page
const PrivacyPolicy = () => {
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
        <div className="mt-2 mb-8 bg-green-200 px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <h1 className="flex justify-center items-center pb-2 font-bold text-lg">
            Politique de confidentialité
          </h1>
          <p className="pb-1">
            Les données personnelles pouvant être collectées sur le Site
            Arosa'je sont les suivantes :
          </p>
          <p className="pb-1">
            <p className="font-semibold">-Création de compte :</p> Sont
            notamment enregistrées, lors de la création de votre compte, vos
            nom, prénom, adresse postale, adresse électronique, numéro de
            téléphone ainsi que vos données de connexion.
          </p>
          <p className="pb-1">
            <p className="font-semibold">
              -Contact/Avis sur le site Arosa'je :
            </p>
            Lors du remplissage du formulaire de contact/dépôt d'avis, ou de
            l'envoi d'un mail, sont collectés vos nom, prénom, adresse
            électronique et votre message.
          </p>
          <p className="pb-1">
            <p className="font-semibold">-Cookies :</p> Lors de la consultation
            de notre site Arosa'je.fr, des cookies sont déposés sur votre
            ordinateur, votre mobile ou votre tablette. Notre site est conçu
            pour être particulièrement attentif aux besoins et attentes de nos
            clients. C'est entre autres pour cela que nous faisons usage de
            cookies afin par exemple de vous identifier et accéder à votre
            compte, gérer vos transactions.
          </p>
          <p className="pt-8 pb-1 font-semibold">
            • En savoir plus sur les cookies
          </p>
          <p className="pb-1">
            Les utilisations de vos données personnelles sont principalement les
            suivantes :
          </p>
          <p className="py-1">-Accès et utilisation du site ;</p>
          <p className="pb-1">
            -Vérification et authentification de vos données ;
          </p>
          <p className="pb-1">
            -Optimisation de l'agencement et du fonctionnement du site ;
          </p>
          <p className="pb-1">
            -Lutte contre les fraudes, utilisations abusives, virus et autres
            logiciels malveillants ;
          </p>
          <p className="pb-1">Gestion des services de paiement ;</p>
          <p className="pb-4">
            -Envoi d'informations commerciales et de messages publicitaires.
          </p>
          Lorsque certaines informations sont obligatoires pour accéder à des
          fonctionnalités spécifiques du Site Arosa'je, ce caractère obligatoire
          est indiqué au moment de la saisie des données. En cas de refus de
          votre part de fournir des informations obligatoires, vous pourriez ne
          pas avoir accès à certains services, fonctionnalités ou rubriques du
          Site Arosa'je.
          <p className="pb-1"></p>
          <p className="pb-1">
            Vos informations personnelles sont conservées aussi longtemps que
            nécessaire :
          </p>
          <p className="pb-1">
            Pendant cette période, le Site Arosa'je met en place les moyens
            organisationnels, logiciels, juridiques, techniques et physiques
            aptes à assurer la confidentialité et la sécurité de vos données
            personnelles, de manière à empêcher leur endommagement, effacement
            ou accès par des tiers non autorisés. L'accès à vos données
            personnelles est strictement limité aux employés et préposés
            Arosa'je, habilités en raison de leurs fonctions et tenus à une
            obligation de confidentialité. Cependant, les données collectées
            pourront éventuellement être communiquées à des sous-traitants
            chargés contractuellement de l'exécution des tâches nécessaires au
            bon fonctionnement du Site Arosa'je et de ses services ainsi qu'à la
            bonne gestion de la relation avec vous, sans que vous ayez besoin de
            donner votre autorisation. Il est précisé que, dans le cadre de
            l'exécution de leurs prestations, les sous-traitants n'ont qu'un
            accès limité à vos données et ont une obligation contractuelle de
            les utiliser en conformité avec les dispositions de la législation
            applicable en matière de protection des données personnelles. En
            dehors des cas énoncés ci-dessus, Arosa'je s'engage à ne pas vendre,
            louer, céder ou donner accès à des tiers à vos données sans votre
            consentement préalable, à moins d'y être contraints en raison d'un
            motif légitime (obligation légale, lutte contre la fraude ou l'abus,
            exercice des droits de la défense, etc.).
            <p className="pt-8 pb-1">
              Conformément aux dispositions légales et règlementaires
              applicables, en particulier la loi n° 78-17 du 6 janvier 1978
              modifiée relative à l'informatique, aux fichiers et aux libertés
              et du règlement européen n°2016/679/UE du 27 avril 2016
              (applicable dès le 25 mai 2018), vous disposez des droits suivants
              :
            </p>
            <p className="pb-1">
              -Mettre à jour ou supprimer vos données en vous connectant à votre
              compte et en configurant ses paramètres ;
            </p>
            <p className="pb-1">
              -Exercer votre droit d'accès, pour connaître les données
              personnelles qui vous concernent ;
            </p>
            <p className="pb-1">
              -Demander la mise à jour de vos données, si celles-ci sont
              inexactes ;
            </p>
            <p className="pb-1">
              -Demander la portabilité ou la suppression de vos données ;
            </p>
            <p className="pb-1">-Demander la suppression de votre compte ;</p>
            <p className="pb-1">
              -Demander la limitation du traitement de vos données ;
            </p>
            <p className="pb-1">
              -Vous opposer, pour des motifs légitimes, au traitement de vos
              données ;
            </p>
            <p className="pb-1">
              -Vous opposer ou retirer votre consentement à l'utilisation, par
              nos services, de vos coordonnées pour l'envoi de nos promotions et
              sollicitations via courriers électroniques, et/ou messages SMS.
              (dans ce cas, il faudra cliquer sur les liens de désinscription
              prévus dans nos SMS ou courriels ou nous contacter dans les
              conditions ci-après).
            </p>
          </p>
          <p className="pt-8 pb-1">Ces différents droits sont à exercer :</p>
          <p className="pb-1">
            -Soit en modifiant les paramètres de votre compte ;
          </p>
          <p className="pb-1">
            -Soit directement sur le Site à la rubrique « Contact » ;
          </p>
          <p className="pb-1">
            -Soit par courrier postal à l'adresse suivante : Arosa'je 2507 av De
            L'europe 69140 Rillieux la pape
          </p>
          <p className="pb-1">
            -Soit par courriel à l'adresse suivante: econtact@Arosa'je.fr.
          </p>
          Pour des raisons de sécurité et éviter toute demande frauduleuse,
          cette demande devra être accompagnée d'un justificatif d'identité. Le
          justificatif sera détruit une fois la demande traitée. Pour toute
          information complémentaire ou réclamation, vous pouvez contacter la
          Commission Nationale de l'Informatique et des Libertés (plus
          d'informations sur www.cnil.fr).
          <p className="pt-8">
            {' '}
            Arosa'je 2507 av De L'europe 69140 Rillieux la pape Tel: +33(0)5 58
            75 90 80{' '}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
