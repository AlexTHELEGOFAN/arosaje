import React, { createContext, useState } from 'react'

export const SearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {},
})

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    setSearchQuery(searchQuery)
  }

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
