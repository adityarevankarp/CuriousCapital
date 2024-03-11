
import React, { createContext, useState, useContext } from "react";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [showBackground, setShowBackground] = useState(true);

  const hideBackground = () => {
    setShowBackground(false);
  };

  return (
    <BackgroundContext.Provider value={{ showBackground, hideBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  return useContext(BackgroundContext);
};
