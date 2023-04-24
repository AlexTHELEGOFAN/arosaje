const React = require('react')
const SearchContextProvider = require('./src/context/SearchContext').default

exports.wrapRootElement = ({ element }) => {
  return <SearchContextProvider>{element}</SearchContextProvider>
}
