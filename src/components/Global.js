import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isAxie, setIsAxie] = useState(false);

  return (
    <GlobalContext.Provider value={{ isAxie, setIsAxie }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
