import { createContext, useReducer } from "react";
import { expenseInitialState, expenseReducer } from "../reducer/expenseReducer";

export const ExpenseContext = createContext();


function useExpenseReducer(){
    const [state, dispatch] = useReducer(expenseReducer, expenseInitialState);

    const addExpense = (expense) => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    const deleteExpense = (id) => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
        });
    };

    const deleteAllExpenses = () => {
        dispatch({
            type: "DELETE_ALL_EXPENSES",
        });
    }

    const editExpense = (id, expense) => {
        dispatch({
            type: "EDIT_EXPENSE",
            payload: {id, expense},
        });
    }

    return {state, addExpense, deleteExpense, deleteAllExpenses, editExpense};    

}
export function ExpenseProvider({ children }) {


    const { state, addExpense, deleteAllExpenses, deleteExpense, editExpense} = useExpenseReducer();
  return (
    <ExpenseContext.Provider value={{ expenses: state, addExpense, deleteAllExpenses, deleteExpense, editExpense}}>
      {children}
    </ExpenseContext.Provider>
  );
}   