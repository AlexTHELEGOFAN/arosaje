// ** React imports

import React, { useEffect, useState } from 'react'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from '../components/Spinner'
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'

const NewAdvert = () => {
  const id = localStorage.getItem('user')
  const [isLoading, setIsLoading] = useState(true)
  const jwt = localStorage.getItem('jwt')

  let decodedToken = ''
  !jwt ?? (decodedToken = jwtDecode(jwt))

  const currentTime = Math.round(new Date().getTime() / 1000)
  let expired
  currentTime > decodedToken.exp ? (expired = true) : (expired = false)

  const fetchPlants = async () => {
    try {
      const res = await axios(`https://localhost:7083/api/Annonce/GetAnnonces`)

      const lastObject = res.data[res.data.length - 1]
      return lastObject.plantId
    } catch (error) {
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const handleSubmit = async values => {
    const fileName = values.picture.match(/[^\\]+$/)[0]

    expired ||
      (jwt === null
        ? toast.error('Vous devez être connecté pour effectuer cette action', {
            position: 'bottom-right',
          })
        : await axios
            .post(`https://localhost:7083/api/Annonce/InsertAnnonce`, {
              name: values.plantName,
              species: values.plantSpecies,
              plantDescription: values.desc,
              plantAddress: values.address,
              userId: id,
            })

            .then(async res => {
              await handleCreate(values.picture)
            })
            .catch(err => {
              console.error(err)
              toast.error("Erreur lors de la création de l'annonce", {
                position: 'bottom-right',
              })
            }))
  }

  const handleCreate = async value => {
    const createdPlant = await fetchPlants()
    const creationDate = dayjs().format()
    const filename = value
      .replace(/^.*[\\\/]/, '')
      .split('.')
      .slice(0, -1)
      .join('.')

    await axios
      .post('https://localhost:7083/api/PlantImage/InsertAnnonce', {
        imageId: createdPlant,
        image: filename,
        imageDate: creationDate,
        plantId: createdPlant,
      })
      .then(
        toast.success('Annonce créée avec succès', {
          position: 'bottom-right',
        }),

        navigate('/home')
      )
      .catch(error => {
        toast.error('Erreur lors du chargement des données', {
          position: 'bottom-right',
        })
      })
  }

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <div>
        <button
          className="flex text-center items-center ml-5 mt-5"
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
          <div className="bg-green-200 px-8 py-5 rounded-md drop-shadow-md">
            <h1 className="text-center text-2xl font-medium my-4">
              Nouvelle annonce
            </h1>

            <Formik
              initialValues={{
                desc: '',
                picture: '',
                plantName: '',
                plantSpecies: '',
                address: '',
              }}
              validateOnChange={false}
              validate={values => {
                let errors = {}

                if (!values.desc) {
                  errors.desc = 'Ce champ est requis'
                }
                if (!values.picture) {
                  errors.picture = 'Ce champ est requis'
                }
                if (!values.plantName) {
                  errors.plantName = 'Ce champ est requis'
                }
                if (!values.plantSpecies) {
                  errors.plantSpecies = 'Ce champ est requis'
                }
                if (!values.address) {
                  errors.address = 'Ce champ est requis'
                }
                return errors
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Nom de la plante ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="plantName"
                    >
                      Nom de la plante *
                    </label>
                    <Field
                      type="text"
                      name="plantName"
                      placeholder="Nom de la plante"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="plantName" component="div" />
                  </div>

                  {/* Espèce de la plante ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="plantSpecies"
                    >
                      Espèce de la plante *
                    </label>
                    <Field
                      type="text"
                      name="plantSpecies"
                      placeholder="Nom de la plante"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="plantSpecies" component="div" />
                  </div>

                  {/* Description ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="desc"
                    >
                      Description *
                    </label>
                    <Field
                      as="textarea"
                      rows={5}
                      name="desc"
                      placeholder="Description"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="desc" component="div" />
                  </div>

                  {/* Adresse ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="address"
                    >
                      Adresse *
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Adresse"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="address" component="div" />
                  </div>

                  {/* Image ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="picture"
                    >
                      Image *
                    </label>
                    <Field
                      type="file"
                      name="picture"
                      placeholder=""
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="picture" component="div" />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="form-button bg-white flex items-center bg-primary text-black uppercase hover:bg-threeGreen active:bg-fourGreen disabled:bg-disabledButton disabled:text-lightgrey-200 transition-all"
                    >
                      Publier
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewAdvert
