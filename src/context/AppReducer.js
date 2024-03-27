export const appReducer = (state, action) => {  
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        session: {
          ...state.session,
          users: [...state.session.users, action.payload]
        }
      };
    case 'DELETE_USER':
      return {
        ...state,
        session: {
          ...state.session,
          users: state.session.users.filter(user => user.id !== action.payload)
        }
      };
    case 'START_NEW_SESSION':
      return {
        ...state,
        session: { users: [] } // Reinicia la sesión con un array vacío de usuarios
      };
    default: 
      return state;
  }



  // switch(action.type) {
  //   case 'ADD_TRANSACTION':
  //     return {
  //       ...state,
  //       transactions: [...state.transactions, action.payload]
  //     };
  //   case 'DELETE_TRANSACTION':
  //     return {
  //       ...state,
  //       transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
  //     }

  //   default: 
  //   return state
  // }

}