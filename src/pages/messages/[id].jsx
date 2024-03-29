// ** React imports

import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import dayjs from 'dayjs'

const Messages = () => {
  const [isLoading, setIsLoading] = useState(true)
  const jwt = localStorage.getItem('jwt')

  let decodedToken = ''
  !jwt ?? (decodedToken = jwtDecode(jwt))

  const currentTime = Math.round(new Date().getTime() / 1000)
  let expired = ''
  currentTime > decodedToken.exp ? (expired = true) : (expired = false)
  const currentUserId = localStorage.getItem('user')
  const [currentUser, setCurrentUser] = useState()
  const [recipientUser, setRecipientUser] = useState()
  const [messageHistory, setMessageHistory] = useState()

  const url = window.location.href
  const parts = url.split('/')
  const recipientId = parseInt(parts[4])

  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7083/api/User/GetUser/${currentUserId}`
      )
      setCurrentUser(response.data)
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const fetchRecipientUser = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7083/api/User/GetUser/${recipientId}`
      )
      setRecipientUser(response.data)
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const fetchMessageHistory = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7083/api/Message/GetMessages`
      )

      setMessageHistory(response.data)
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const initData = async () => {
    try {
      await fetchCurrentUser()
      await fetchRecipientUser().then(fetchMessageHistory())
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    initData().then(() => setIsLoading(false))
  }, [])

  const handleMessageSend = async values => {
    const form = {
      to_name: recipientUser?.username,
      to_email: recipientUser?.email,
      from_email: currentUser?.email,
      from_name: currentUser?.username,
      message: values.message,
    }
    try {
      emailjs.send(
        'service_5et3c64',
        'template_g761ukp',
        form,
        'REQIuB5vj3Wo6oAXl'
      )

      await axios.post('https://localhost:7083/api/Message/InsertMessage', {
        sendDate: dayjs().format(),
        content: values.message,
        userId: currentUser?.userId,
        userId_1: recipientUser?.userId,
      })

      await fetchMessageHistory()

      toast.success('Votre message a été envoyé', {
        position: 'bottom-right',
      })
    } catch {
      toast.error("Erreur lors de l'envoi du message", {
        position: 'bottom-right',
      })
    }
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <button
        className="flex text-center items-center pb-4"
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
        <div className="bg-green-200 px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <h1 className="text-center text-2xl font-medium my-4">
            Formulaire de contact
          </h1>

          <p className="text-base pb-4">Contacter {recipientUser?.username}</p>

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
            onSubmit={
              expired || jwt === null
                ? toast.error(
                    'Vous devez être connecté pour effectuer cette action',
                    {
                      position: 'bottom-right',
                    }
                  )
                : handleMessageSend
            }
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="pb-8 text-left relative">
                  <label
                    className="flex text-left text-black text-sm mb-1"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <Field
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Message"
                    className="w-[250px] md:w-full justify-center login-field"
                  />
                  <ErrorMessage name="message" component="div" />
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
      </div>

      <div className="flex justify-center items-center py-6">
        <div className="bg-green-200 px-8 py-5 w-[70%] rounded-md drop-shadow-md">
          <h1 className="text-center text-2xl font-medium my-4">Historique</h1>
          {messageHistory?.length ? (
            messageHistory

              .filter(
                message =>
                  (message?.userId === currentUser?.userId &&
                    message?.userId_1 === recipientUser?.userId) ||
                  (message?.userId === recipientUser?.userId &&
                    message?.userId_1 === currentUser?.userId)
              )
              .sort(
                (a, b) =>
                  dayjs(a.sendDate).valueOf() - dayjs(b.sendDate).valueOf()
              )

              .map(message => (
                <div className="pt-5 pr-0 " key={message?.messageId}>
                  {message?.userId === currentUser?.userId ? (
                    <div className="grid justify-start">
                      <p className="text-base  font-semibold  pb-4">
                        Vous le{' '}
                        {dayjs(message?.sendDate).format('DD/MM/YYYY HH:mm:ss')}{' '}
                        à {recipientUser?.username} :
                      </p>
                      <p className="text-base pb-4">{message?.content}</p>
                    </div>
                  ) : (
                    <div className="grid justify-start">
                      <p className="text-base  font-semibold  pb-4">
                        {recipientUser?.username} le{' '}
                        {dayjs(message?.sendDate).format('DD/MM/YYYY HH:mm:ss')}{' '}
                        à vous :
                      </p>
                      <p className="text-base pb-4">{message?.content}</p>
                    </div>
                  )}
                </div>
              ))
          ) : (
            <p className="flex text-center">Aucun message envoyé</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Messages
