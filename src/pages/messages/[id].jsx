// ** React imports

import React, { useEffect, useState } from "react"

import Layout from "../../components/layout"

const Messages = () => {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    // Listen for new messages from server
    // socket.on("message", newMessage => {
    //   setChatHistory(prevChatHistory => [...prevChatHistory, newMessage])
    // })
  }, [])

  const handleMessageSend = event => {
    event.preventDefault() // Prevent page refresh on submit
    // socket.emit("message", message) // Send message to server
    setMessage("") // Clear input field
  }

  const handleInputChange = event => {
    setMessage(event.target.value)
  }

  return (
    <Layout>
      <div className="flex justify-center bg-secondGreen px-8 py-5 rounded-md drop-shadow-md">
        <div>
          <ul>
            {/* Display chat messages */}
            {chatHistory.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>

          <form onSubmit={handleMessageSend}>
            <input type="text" value={message} onChange={handleInputChange} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Messages
