// ** Default import

import React, { createContext, useState } from 'react';

// ** Auth context

const defaultContext = {
  currentUser: {},
  setCurrentUser: () => {},
};

const UserContext = createContext(defaultContext);

// ** Auth provider

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
