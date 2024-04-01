import { createContext, useReducer } from "react";
import { userInitialState, userReducer } from "../reducer/userReducer";

export const UserContext = createContext();


function useSessionReducer(){
    const [state, dispatch] = useReducer(userReducer, userInitialState);

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

    const deleteAllUsers = () => {
        dispatch({
            type: "DELETE_ALL_USERS",
        });
    }

    return {state, addUser, deleteUser, deleteAllUsers};    

}
export function UserProvider({ children }) {


    const { state, addUser, deleteAllUsers, deleteUser} = useSessionReducer();
  return (
    <UserContext.Provider value={{ users: state, addUser, deleteAllUsers, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
}   