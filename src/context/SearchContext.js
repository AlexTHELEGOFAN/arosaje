// ** Default import

import React, { createContext, useState } from 'react'

// ** Search context

export const SearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {},
})

// ** Search provider

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState()

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
