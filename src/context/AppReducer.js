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
        session: { users: [] }
      };
      case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    default: 
      return state;
  }

}