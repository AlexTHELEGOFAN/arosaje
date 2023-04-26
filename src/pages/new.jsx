// ** React imports

import React, { useContext, useEffect, useState } from 'react'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import Spinner from '../components/Spinner'

const NewAdvert = () => {
  // const { currentUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  // Handle login Formik
  const handleSubmit = async values => {
    const fileName = values.picture.match(/[^\\]+$/)[0]

    await Promise.all([
      axios.post(`https://localhost:7083/api/PlantImage/InsertAnnonce`, {
        body: {
          name: values.plantName,
          species: values.plantSpecies,
          plantDescription: values.desc,
          plantAddress: values.address,
          userId: 1,
          // currentUser?.id
        },
      }),

      // axios.post(
      //   `https://localhost:7083/api/Annonce/InsertAnnonce`,
      //   {
      //     body: {
      //       "image": "test",
      //       "imageDate": "2023-04-17T20:29:10.070Z",
      //       // "plantId": 5
      //     }
      //   }
      // ),
    ])

      .then(res => {
        // navigate('/home')
      })
      .catch(err => {
        console.error(err)
        toast.error("Erreur lors de la création de l'annonce", {
          position: 'bottom-right',
        })
      })
  }

  useEffect(async () => {
    // await fetchPlants()
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
                      type="text"
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
