import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./AppReducer";

const Global = createContext();

export default function GloableProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Global.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </Global.Provider>
  );
}

export const useAuth = () => {
  return useContext(Global);
};
