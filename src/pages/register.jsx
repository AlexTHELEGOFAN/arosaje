// ** Default import

import React, { useContext, useState } from "react"

// ** Utils

import Cookies from "universal-cookie"
import axios from "axios"
import { Formik, Form, ErrorMessage, Field } from "formik"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../context/UserContext"
import jwtDecode from "jwt-decode"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import { REACT_APP_BASE_URL } from '../CONF';

// ** Register page

function Register() {
  const [inputType, setInputType] = useState("password")
  const { setCurrentUser } = useContext(UserContext)

  //   const UrlAPI = REACT_APP_BASE_URL;
  const config = {
    "Access-Control-Allow-Origin": "*",
  }

  // Toggle show or hide password
  const toggleVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  // Handle register Formik
  const handleRegister = values => {
    // axios
    //   .get(
    //     `${UrlAPI}/api/Token?password=${values.username}&username=${values.password}`,
    //     {
    //       headers: config,
    //     }
    //   )
    //   .then((res) => {
    //     // Create and set browser cookies
    //     const cookies = new Cookies();
    //     cookies.set('jwt', res.data);
    //     localStorage.setItem('jwt', res.data);

    //     // Get and decode jwt token
    //     const jwt = cookies.get('jwt');
    //     const decodedToken = jwtDecode(jwt);
    //     setCurrentUser(decodedToken.unique_name);
    //     localStorage.setItem('user', decodedToken.unique_name);
    navigate("/")
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Nom d'utilisateur ou mot de passe incorrect", {
    //       position: 'bottom-right',
    //     });
    //   });
  }

  return (
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
        <div className="bg-secondGreen px-8 py-5 w-[25%] rounded-md drop-shadow-md">
          <h1 className="text-center text-2xl font-medium my-4">
            Nouveau compte
          </h1>

          <Formik
            initialValues={{
              username: "",
              name: "",
              email: "",
              tel: "",
              address: "",
              password: "",
              confirmPassword: "",
            }}
            validateOnChange={false}
            validate={values => {
              let errors = {}
              if (!values.username) {
                errors.username = "Ce champ est requis"
              }
              if (!values.email) {
                errors.email = "Ce champ est requis"
              }
              if (!values.tel) {
                errors.tel = "Ce champ est requis"
              }
              if (!values.address) {
                errors.address = "Ce champ est requis"
              }
              if (!values.password) {
                errors.password = "Ce champ est requis"
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Ce champ est requis"
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Le mot de passe est différent"
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
                    Nom d'utilisateur
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Pseudo"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="username" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="email"
                  >
                    Adresse email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Pseudo"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Numéro de téléphone
                  </label>
                  <Field
                    type="text"
                    name="tel"
                    placeholder="Numéro de téléphone"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="tel" component="div" />
                </div>

                <div className="pb-4">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="text"
                  >
                    Adresse
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Numéro de téléphone"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="address" component="div" />
                </div>

                <div className="pb-4 text-left relative">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="password"
                  >
                    Mot de passe
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

                <div className="pb-4 text-left relative">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="password"
                  >
                    Confirmer le mot de passe
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
