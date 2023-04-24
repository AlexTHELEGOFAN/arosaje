// ** React imports

import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import Spinner from '../../components/Spinner'

const Messages = () => {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleMessageSend = event => {
    event.preventDefault() // Prevent page refresh on submit
    // socket.emit("message", message) // Send message to server
    setMessage('') // Clear input field
  }

  const handleInputChange = event => {
    setMessage(event.target.value)
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      {/* <div className="flex justify-center bg-secondGreen px-8 py-5 rounded-md drop-shadow-md">
        <div className="flex justify-center items-center"> */}
      <div className="bg-green-200 px-8 py-5  rounded-md drop-shadow-md">
        <h1 className="text-center text-2xl font-medium my-4">
          Formulaire de contact
        </h1>

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
          onSubmit={handleMessageSend}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="pb-8">
                <label
                  className="flex text-left text-black text-sm mb-1"
                  htmlFor="username"
                >
                  Objet
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  className="w-[250px] md:w-full justify-center login-field"
                />
                <ErrorMessage name="username" component="div" />
              </div>

              <div className="pb-8">
                <label
                  className="flex text-left text-black text-sm mb-1"
                  htmlFor="username"
                >
                  Message
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  className="w-[250px] md:w-full justify-center login-field"
                />
                <ErrorMessage name="username" component="div" />
              </div>

              <div className="pb-8">
                <label
                  className="flex text-left text-black text-sm mb-1"
                  htmlFor="username"
                >
                  Image
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  className="w-[250px] md:w-full justify-center login-field"
                />
                <ErrorMessage name="username" component="div" />
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
    </Layout>
  )
}

export default Messages
