export const expenseInitialState = JSON.parse(window.localStorage.getItem('expenses')) ||  [];

export const updateExpenseLocalStorage = state => {
    window.localStorage.setItem('expenses', JSON.stringify(state));
}

export const expenseReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            state = [
                ...state, 
                {
                    ...action.payload,
                }
            ];
            updateExpenseLocalStorage(state)
            return state;
        case 'DELETE_EXPENSE':
            state = state.filter(expense => expense.id !== action.payload);
            updateExpenseLocalStorage(state)
          return state;
        case 'DELETE_ALL_EXPENSES':
          return expenseInitialState;
        default: 
          return state;
      }
}