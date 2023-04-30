// ** Default import

import React, { useContext, useEffect, useState } from 'react'

// ** Utils

import axios from 'axios'
import { navigate } from 'gatsby'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../context/UserContext'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../components/Spinner'

// ** Login page

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const [inputType, setInputType] = useState('password')
  const [isLoading, setIsLoading] = useState(true)

  // Toggle show or hide password
  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  // Handle login Formik
  const handleLogin = values => {
    axios
      .post(
        `https://localhost:7083/api/User/Authenticate?username=${values.username}&password=${values.password}`
      )
      .then(res => {
        // Create and set browser cookies
        const cookies = new Cookies()
        cookies.set('jwt', res.data.token)
        localStorage.setItem('jwt', res.data.token)

        // Get and decode jwt token
        const jwt = cookies.get('jwt')
        const decodedToken = jwtDecode(jwt)

        setCurrentUser(decodedToken.unique_name)
        localStorage.setItem('user', decodedToken.unique_name)
        navigate('/home')

        setTimeout(() => {
          window.location.reload()
        }, 1000)
      })
      .catch(err => {
        toast.error("Nom d'utilisateur ou mot de passe incorrect", {
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
    <div>
      <button
        className="flex text-center items-center ml-5 mt-5"
        onClick={() => (
          navigate(-1),
          setTimeout(() => {
            window.location.reload()
          }, 10)
        )}
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
          <h1 className="text-center text-2xl font-medium my-4">Connexion</h1>

          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validateOnChange={false}
            validate={values => {
              let errors = {}
              if (!values.username) {
                errors.username = 'Ce champ est requis'
              }
              if (!values.password) {
                errors.password = 'Ce champ est requis'
              }
              return errors
            }}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="pb-8">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="username"
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

                <div className="pb-8 text-left relative">
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

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="form-button bg-white flex items-center bg-primary text-black uppercase hover:bg-threeGreen active:bg-fourGreen disabled:bg-disabledButton disabled:text-lightgrey-200 transition-all"
                  >
                    Connexion
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
