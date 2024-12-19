import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', surname: '' });

  const saveUserInfo = (name, surname) => {
    setUserInfo({ name, surname });
  };

  return (
    <UserContext.Provider value={{ userInfo, saveUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
