import React from 'react'
import { SearchContext } from '../context/SearchContext'

const RootElement = ({ children }) => {
  return <SearchContext>{children}</SearchContext>
}

export default RootElement
