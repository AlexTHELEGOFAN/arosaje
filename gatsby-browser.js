import React from 'react'
import SearchContextProvider from './src/context/SearchContext'

export const wrapRootElement = ({ element }) => {
  return <SearchContextProvider>{element}</SearchContextProvider>
}
