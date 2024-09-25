import React from 'react';

export const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
  };

export const logOut = () => {};
const AppContext = React.createContext({
  logOut: logOut,
  user: defaultUser
});

export default AppContext;