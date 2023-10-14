import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import dayjs from 'dayjs'

// Account page
const History = () => {
  const url = window.location.href
  const parts = url.split('/')
  const id = parseInt(parts[4])

  const [messageHistory, setMessageHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = async userId => {
    try {
      const response = await axios(
        `https://localhost:7083/api/User/GetUser/${userId}`
      )

      return response.data
    } catch {
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

      const messagesWithUsers = await Promise.all(
        response.data.map(async message => {
          const senderUser = await fetchUser(message.userId)
          const recipientUser = await fetchUser(message.userId_1)

          return {
            ...message,
            sender: senderUser,
            recipient: recipientUser,
          }
        })
      )

      setMessageHistory(messagesWithUsers)
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors du chargement des données', {
        position: 'bottom-right',
      })
    }
  }

  const initData = async () => {
    await fetchMessageHistory()
  }

  useEffect(() => {
    initData().then(() => setIsLoading(false))
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
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
          <div className="">
            <div>
              <h1 className="text-center text-2xl font-medium my-4">
                Historique des messages
              </h1>
              {Object.keys(messageHistory).length ? (
                messageHistory

                  .filter(
                    message =>
                      message?.userId === id || message?.userId_1 === id
                  )
                  .sort(
                    (a, b) =>
                      dayjs(a.sendDate).valueOf() - dayjs(b.sendDate).valueOf()
                  )

                  .map(message => (
                    <div className="pt-5 pr-0 " key={message?.messageId}>
                      {message?.userId === id ? (
                        <div className="grid justify-start">
                          <p className="text-base  font-semibold  pb-4">
                            Vous le{' '}
                            {dayjs(message?.sendDate).format(
                              'DD/MM/YYYY HH:mm:ss'
                            )}{' '}
                            à {message?.recipient?.username} :
                          </p>
                          <p className="text-base pb-4">{message?.content}</p>
                        </div>
                      ) : (
                        <div className="grid justify-start">
                          <p className="text-base  font-semibold  pb-4">
                            {message?.sender?.username} le{' '}
                            {dayjs(message?.sendDate).format(
                              'DD/MM/YYYY HH:mm:ss'
                            )}{' '}
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
        </div>
      </div>
    </Layout>
  )
}

export default History
