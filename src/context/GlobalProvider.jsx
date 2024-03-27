import { useEffect, useReducer } from "react";
import { appReducer } from "./AppReducer";
import { AppContext } from "./AppContext";

const initialState = {
  session: localStorage.getItem("session")
    ? JSON.parse(localStorage.getItem("session"))
    : { users: [] },
};

export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(state.session)); 
  }, [state.session])

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  const startNewSession = () => {
    localStorage.removeItem("session");
    dispatch({
      type: "START_NEW_SESSION",
    });
  };

  return (
    <AppContext.Provider
      value={{
        session: state.session,
        addUser,
        deleteUser,
        startNewSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
