import React, { createContext, useState } from "react";

export let popupContext = createContext();

export default function PopupContextProvider({ children }) {
  const [opened, setOpened] = useState(false);

  return (
    <popupContext.Provider value={{ opened, setOpened }}>
      {children}
    </popupContext.Provider>
  );
}
