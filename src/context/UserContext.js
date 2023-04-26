// ** Default import

import React, { createContext, useState } from 'react'

// ** Auth context

export const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
})

// ** Auth provider

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
