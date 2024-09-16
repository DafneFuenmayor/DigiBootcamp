

import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode: true }; // Solo modo noche

const themeReducer = (state, action) => {
  switch (action.type) {
    // No necesitamos manejar acciones, ya que solo hay un estado: modo noche
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state }}>
      {props.children}
    </themeContext.Provider>
  );
};
