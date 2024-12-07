"use client";
import PropTypes from "prop-types";

import { createContext, useState } from "react";

const ConfigContext = createContext();


function ConfigProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ConfigContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
