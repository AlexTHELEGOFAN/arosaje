const React = require('react')
const { default: UserContextProvider } = require('./src/context/UserContext')
const SearchContextProvider = require('./src/context/SearchContext').default

exports.wrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <SearchContextProvider>{element}</SearchContextProvider>
    </UserContextProvider>
  )
}
