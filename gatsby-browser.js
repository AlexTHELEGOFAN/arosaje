import React from 'react'
import SearchContextProvider from './src/context/SearchContext'
import UserContextProvider from './src/context/UserContext'

export const wrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <SearchContextProvider>{element}</SearchContextProvider>
    </UserContextProvider>
  )
}
