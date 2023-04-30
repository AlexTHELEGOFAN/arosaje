// ** React imports

import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'

const Messages = () => {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleMessageSend = event => {
    toast.success('Votre message a été envoyé', {
      position: 'bottom-right',
    })
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
            if (!values.message) {
              errors.message = 'Ce champ est requis'
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
                  htmlFor="object"
                >
                  Objet du message
                </label>
                <Field
                  type="text"
                  name="object"
                  placeholder="Objet"
                  className="w-[250px] md:w-full justify-center login-field"
                />
                <ErrorMessage name="object" component="div" />
              </div>

              <div className="pb-8">
                <label
                  className="flex text-left text-black text-sm mb-1"
                  htmlFor="message"
                >
                  Message *
                </label>
                <Field
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-[250px] md:w-full justify-center login-field"
                />
                <ErrorMessage name="message" component="div" />
              </div>

              <div className="pb-8 text-left relative">
                <label
                  className="flex text-left text-black text-sm mb-1"
                  htmlFor="picture"
                >
                  Image
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
                  Envoyer le message
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
