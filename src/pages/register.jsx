// ** Default import

import React, { useContext, useEffect, useState } from 'react'

// ** Utils

import { Formik, Form, ErrorMessage, Field } from 'formik'
import 'react-toastify/dist/ReactToastify.css'
// import { UserContext } from "../context/UserContext"
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
// import { REACT_APP_BASE_URL } from '../CONF';

// ** Register page

function Register() {
  const [inputType, setInputType] = useState('password')
  const [isLoading, setIsLoading] = useState(true)
  // const { setCurrentUser } = useContext(UserContext)

  const config = {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': '*',
    // 'Access-Control-Allow-Methods': 'Get, post, put, delete',
  }

  // Toggle show or hide password
  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  // Handle register Formik
  const handleRegister = values => {
    axios
      .post(`https://localhost:7083/api/User/InsertUser`, {
        headers: config,
        body: values,
      })
      .then(res => {
        navigate('/login')
      })
      .catch(err => {
        console.error(err)
        toast.error('Oups ! Une erreur est survenue.', {
          position: 'bottom-right',
        })
      })
  }

  useEffect(async () => {
    // await fetchUser()
    // await fetchUserPlants()
    setIsLoading(false)
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
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
        <div className="bg-green-200 px-8 py-5  rounded-md drop-shadow-md">
          <h1 className="text-center text-2xl font-medium my-4">
            Nouveau compte
          </h1>

          <Formik
            initialValues={{
              username: '',
              // TODO: remove
              firstName: '',
              lastName: '',
              age: '',
              email: '',
              phone: '',
              // TODO: remove
              address: '',
              password: '',
              confirmPassword: '',
              cityId: 1,
              typeId: 1,
              status: 1,
            }}
            validateOnChange={false}
            validate={values => {
              let errors = {}
              if (!values.username) {
                errors.username = 'Ce champ est requis'
              }
              // TODO: remove
              if (!values.firstName) {
                errors.firstName = 'Ce champ est requis'
              }
              if (!values.lastName) {
                errors.lastName = 'Ce champ est requis'
              }
              if (!values.email) {
                errors.email = 'Ce champ est requis'
              }
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Adresse email invalide'
              }
              if (!values.phone) {
                errors.phone = 'Ce champ est requis'
              }
              // TODO: remove
              if (!values.address) {
                errors.address = 'Ce champ est requis'
              }
              if (!values.password) {
                errors.password = 'Ce champ est requis'
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = 'Ce champ est requis'
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Le mot de passe est différent'
              }
              return errors
            }}
            onSubmit={handleRegister}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Nom d'utilisateur *
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="username" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Nom *
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Nom"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Prénom *
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Prénom"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="email"
                  >
                    Adresse email *
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Adresse email"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Numéro de téléphone *
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
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

                <div className="pb-4 text-left relative">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="password"
                  >
                    Mot de passe *
                  </label>
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-2 top-8"
                  >
                    {/* <AiFillEye className="w-8 h-6" /> */}
                  </button>
                  <Field
                    type={inputType}
                    name="password"
                    placeholder="Mot de passe"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <div className="pb-8 text-left relative">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="password"
                  >
                    Confirmer le mot de passe *
                  </label>
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-2 top-8"
                  ></button>
                  <Field
                    type={inputType}
                    name="confirmPassword"
                    placeholder="Confirmer le mot de passe"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="confirmPassword" component="div" />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="form-button bg-white flex items-center bg-primary text-black uppercase hover:bg-threeGreen active:bg-fourGreen disabled:bg-disabledButton disabled:text-lightgrey-200 transition-all"
                  >
                    Créer un compte
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
