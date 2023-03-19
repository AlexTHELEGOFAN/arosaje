// ** Default import

import React, { createContext, useState } from "react"

// ** Auth context

const defaultContext = {
  search: {},
  setSearch: () => {},
}

const SearchContext = createContext(defaultContext)

// ** Auth provider

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState({})

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchContextProvider }
