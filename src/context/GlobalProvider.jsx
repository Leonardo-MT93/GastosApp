import { useEffect, useReducer } from "react";
import { appReducer } from "./AppReducer";
import { AppContext } from "./AppContext";

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    const localdata = localStorage.getItem("transactions");
    return localdata ? JSON.parse(localdata) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state)); 
  }, [state])

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
