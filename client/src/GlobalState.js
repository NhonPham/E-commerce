import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import ProductsAPI from "./api/ProductsAPI";

const defaultValue = {};
export const GlobalState = createContext(defaultValue);

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const response = await axios.get("/user/refresh_token");

        setToken(response.data.accesstoken);

        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};