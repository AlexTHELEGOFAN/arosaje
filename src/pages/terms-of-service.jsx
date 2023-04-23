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
          <div>
            <h1 className="flex justify-center items-center pb-2 font-bold">
              Conditions générales de vente
            </h1>
            <p className="font-semibold">Préambule :</p>
            <p className="pb-1">
              Le présent site www.Arosa'je.fr est la propriété de la société
              S.A.S. Arosa'je, ainsi que l'ensemble des droits y afférents.
              Toute reproduction, intégrale ou partielle, est obligatoirement
              soumise à l'autorisation des propriétaires. Toutefois, les
              liaisons du type hypertexte vers le site sont autorisées sans
              demandes spécifiques. Le fait de passer commande implique
              l'acceptation sans réserve des conditions de vente et aux prix
              indiqués sur le site. Arosa'je s'engage réciproquement à respecter
              les obligations lui incombant. Ces présentes conditions
              s'appliquent exclusivement à toutes les commandes passées via le
              site www.Arosa'je.fr en ligne ou par téléphone.{' '}
            </p>
            <p className="font-semibold">
              Protection des données personnelles :
            </p>
            <p className="pb-1">
              Toutes les données que vous nous confiez sont utilisées afin de
              pouvoir traiter vos commandes et ne seront en aucun cas
              réutilisées en dehors de notre société ou distribuées à qui que ce
              soit. En vertu de la loi n°78-17 du 6 janvier 1978 relative à
              l'informatique, aux fichiers et aux libertés, vous disposez auprès
              de notre service Clients d'un droit d'accès, de consultation, de
              modification, de rectification ou de suppression des données que
              vous nous avez communiquées.
            </p>
            <p className="font-semibold">1. Acceptation des conditions</p>
            <p className="pb-1">
              Le Client reconnaît avoir pris connaissance, au moment de la
              passation de commande, des conditions générales de vente énoncées
              sur cet écran et déclare expressément les accepter sans réserve.
              Les présentes conditions générales de vente régissent les
              relations contractuelles entre Arosa'je et son Client, les deux
              parties les acceptant sans réserve. Ces conditions générales de
              vente prévaudront sur toutes autres conditions figurant dans tout
              autre document, sauf dérogation préalable, expresse et écrite.
            </p>
            <p className="font-semibold">2. Produits</p> L'acheteur peut accéder
            aux caractéristiques essentielles des produits avant commande. Il
            convient de distinguer les photographies qui présentent la plante
            adulte en situation, des photographies en l'état des plantes
            commercialisées. Dans ce dernier cas , le ou les photographies
            concernées sont accompagnées d'une légende permettant d'identifier
            l'article qu'elles décrivent. Information préalable sur les risques
            potentiels de certains végétaux pour la santé humaine Conformément à
            l'article L. 1338-3 du code de la santé publique, tout distributeur
            ou vendeur de végétaux susceptibles de porter atteinte à la santé
            humaine est tenu d'informer, préalablement à la conclusion de la
            vente, l'acquéreur des risques pour la santé humaine et, le cas
            échéant, des moyens de s'en prémunir. Certains végétaux,
            limitativement énumérés à l'annexe de l'arrêté du 4 septembre 2020,
            peuvent potentiellement présenter des intoxications par ingestion,
            des allergies respiratoires, des réactions cutanéomuqueuses ou des
            réactions cutanées anormales en cas d'exposition au soleil. Ces
            risques, précautions et/ou actions à mener le cas échéant sont
            présentés dans le document suivant :
            https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042325453. En
            acceptant les présentes conditions générales de vente, l'acquéreur
            reconnaît avoir été dûment informé, préalablement à la vente, des
            risques pour la santé humaine potentiellement liés à l'acquisition
            desdits végétaux.
            <p className="font-semibold">3. Prix</p>
            <p className="pb-1">
              Les prix sont exprimés en euros. Les prix indiqués sur les fiches
              produit ne comprennent pas les frais de transport, sauf
              spécification. Les frais de port varient selon le pays de
              destination : Tout savoir sur la livraison Les tarifs sont
              indiqués TTC . Ils ne prennent pas en compte les frais de port. Le
              montant total indiqué dans la confirmation de commande est le
              montant définitif, exprimé Toutes Taxes Comprises, incluant la TVA
              calculée selon les règles fiscales applicables. Il comprend le
              prix des produits, les frais de manutention, d'emballage et de
              conservation des produits, les frais de transport. Les
              fluctuations de prix ne peuvent donner lieu à aucun dédommagement.
              Par exemple, une commande passée le jour j ne pourra bénéficier
              d'un tarif plus avantageux mis en place à j+1.
            </p>
            <p className="pb-1">
              Le Client dispose (article 34 de la loi du 6 janvier 1978) d'un
              droit d'accès, de modification, de rectification et de suppression
              des données qui le concernent, qu'il peut exercer. De plus,
              Arosa'je s'engage à ne pas communiquer, gratuitement ou avec
              contrepartie, les coordonnées de ses Clients à un tiers.
              <p className="pb-1">
                Dernière Mise à jour : le 10-03-2023 Arosa'je 2507 Av De
                L'europe 69140 rillieux la pape{' '}
              </p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LegalNotice
